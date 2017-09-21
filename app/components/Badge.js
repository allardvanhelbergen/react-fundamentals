const React = require('react');
const PropTypes = require('prop-types');


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


module.exports = Badge;