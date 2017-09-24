const React = require('react');
const Link = require('react-router-dom').Link;
const PropTypes = require('prop-types');
const PlayerPreview = require('./PlayerPreview');


class PlayerInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;

    this.setState(function() {
      return {
        username: value
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(
      this.props.playerNr,
      this.state.username
    );
  }

  render() {
    return (
      <form className='form--battle column' onSubmit={this.handleSubmit}>
        <label className='label--battle' htmlFor='username'>
          {this.props.label}
        </label>
        <input
            id='username'
            placeholder='Enter a username'
            type='text'
            autoComplete='off'
            value={this.state.username}
            onChange={this.handleChange}
        />
        <button
            className='button'
            type='submit'
            disabled={!this.state.username}
        >
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  playerNr: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};


class Battle extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(playerNr, username) {
    this.setState(function() {
      let newState = {};

      newState[playerNr + 'Name'] = username;
      newState[playerNr + 'Image'] = 'https://github.com/' + username + '.png?size=200';

      return newState;
    });
  }

  handleReset(playerNr) {
    this.setState(function() {
      let newState = {};

      newState[playerNr + 'Name'] = '';
      newState[playerNr + 'Image'] = null;

      return newState;
    });
  }

  render () {
    let match = this.props.match;
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;
    let playerOneImage = this.state.playerOneImage;
    let playerTwoImage = this.state.playerTwoImage;

    return (
      <div>
        <div className='row'>
          {(!playerOneName) &&
            <PlayerInput
                playerNr='playerOne'
                label='Player 1'
                onSubmit={this.handleSubmit}
            />
          }

          {(playerOneImage) &&
            <PlayerPreview
                avatar={playerOneImage}
                username={playerOneName}
            >
              <button
                  className='button--link player-preview__reset'
                  onClick={this.handleReset.bind(null, 'playerOne')}
              >
                Reset player
              </button>
            </PlayerPreview>
          }

          {(!playerTwoName) &&
            <PlayerInput
                playerNr='playerTwo'
                label='Player 2'
                onSubmit={this.handleSubmit}
            />
          }

          {(playerTwoImage) &&
            <PlayerPreview
                avatar={playerTwoImage}
                username={playerTwoName}
            >
              <button
                  className='button--link player-preview__reset'
                  onClick={this.handleReset.bind(null, 'playerTwo')}
              >
                Reset player
              </button>
            </PlayerPreview>
          }
        </div>
        {playerOneImage && playerTwoImage &&
          <div className='row'>
            <Link
              className='button'
              to={{
                pathname: match.url + '/results',
                search: '?playerOneName=' + playerOneName +
                    '&playerTwoName=' + playerTwoName
              }}
            >
              Battle!
            </Link>
          </div>
        }
      </div>
    )
  }
}


module.exports = Battle;