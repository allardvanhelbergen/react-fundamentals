const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');


let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];


function SelectLanguage(props) {
  return (
    <ul className='languages'>
      {languages.map(function(lang) {
        return (
          <li
              className={'language ' +
                  (lang === props.selectedLanguage ? 'language--selected' : '')}
              onClick={props.onSelect.bind(null, lang)}
              key={lang}
          >
            {lang}
          </li>
        );
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};


function RepoGrid(props) {
  return (
    <ul className='popular-list'>
      {props.repos.map(function(repo, index) {
        return (
          <li key={repo.name} className='popular-list__item'>
            <div className='popular-rank'>#{index + 1}</div>
              <ul className='ranking-repo-list'>
                <li>
                  <img
                      className='avatar'
                      src={repo.owner.avatar_url}
                      alt={'Avatar for ' + repo.owner.login}
                  />
                </li>
                <li><a href={repo.html_url}>{repo.name}</a></li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};


class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: languages[0],
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang,
        repos: null
      };
    });

    api.fetchPopularRepos(lang)
      .then(function(repos) {
        /** TODO: this still fires when the component has been discarded by
          navigating away, and results in a React warning.
          Perhaps check if the component still exists? */
        this.setState(function() {
          return {
            repos: repos
          };
        })
      }.bind(this));
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {(!this.state.repos) ?
          <p>Loading...</p> :
          <RepoGrid repos={this.state.repos} />
        }
      </div>
    )
  }
}


module.exports = Popular;