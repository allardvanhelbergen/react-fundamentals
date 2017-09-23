const React = require('react');
const Link = require('react-router-dom').Link;
const PropTypes = require('prop-types');


class PlayerInput extends React.Component {

  constructor (props) {
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
      this.props.id,
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
  id: PropTypes.string.isRequired,
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
  }

  handleSubmit(playerNr, username) {
    this.setState(function() {
      let newState = {};

      newState[playerNr + 'Name'] = username;
      newState[playerNr + 'Image'] = 'https://github.com' + username + '.png?size=200';

      return newState;
    });
  }

  render () {
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;

    return (
      <div>
        <div className='row'>
          {!playerOneName &&
            <PlayerInput
              id='playerOne'
              label='Player 1'
              onSubmit={this.handleSubmit}
            />}
          {!playerTwoName &&
            <PlayerInput
              id='playerTwo'
              label='Player 2'
              onSubmit={this.handleSubmit}
            />}
        </div>
      </div>
    )
  }
}


module.exports = Battle;