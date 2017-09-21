const React = require('react');
const PropTypes = require('prop-types');

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


module.exports = Users;