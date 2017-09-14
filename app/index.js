const React = require('react');
const ReactDom = require('react-dom');
const PropTypes = require('prop-types');

require('./index.css');


class Users extends React.Component {
  render() {
    let friends = this.props.list.filter(function (user) {
      return user.friend === true;
    });

    let nonFriends = this.props.list.filter(function (user) {
      return user.friend !== true;
    });

    return (
      <div>
        <h2>Friends</h2>
        <ul>
          {friends.map(function (user) {
            return (
              <li key={user.name}>
                {user.name}
              </li>
            )
          })}
        </ul>
        <h2>Non Friends</h2>
        <ul>
          {nonFriends.map(function (user) {
            return (
              <li key={user.name}>
                {user.name}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired
  }))
};


class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt={this.props.name + '- Great picture!'}
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>Username: {this.props.username}</h3>
      </div>
    );
  }
}


Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};


class App extends React.Component {
  render() {
    return (
      <div>
        <Badge
          name='Polly the Party Parrot'
          username='polly'
          img='https://i.giphy.com/media/5PSPV1ucLX31u/200_s.gif'
        />
        <Users list={[
          {name: 'Tyler', friend: true},
          {name: 'Ryan', friend: true},
          {name: 'Micheal', friend: false},
          {name: 'Mikenzi', friend: false},
          {name: 'Jessica', friend: true},
          {name: 'Dan', friend: false}
        ]}/>
      </div>
    )
  }
}



ReactDom.render(
  <App />,
  document.getElementById('app')
);