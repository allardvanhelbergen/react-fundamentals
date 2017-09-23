const React = require('react');
const Link = require('react-router-dom').Link;


class Home extends React.Component {
  render() {
    return (
      <div className='container--center'>
        <h1>Github Battle</h1>
        <h2>Battle your friends... and stuff</h2>
        <Link className='link--button' to='/battle'>
          BAAAATTTLE!!!
        </Link>
      </div>
    );
  }
}


module.exports = Home;