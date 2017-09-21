const React = require('react');
const Badge = require('./Badge');
const Users = require('./Users');
const Popular = require('./Popular');


class App extends React.Component {
  render() {
    return (
      <div className='container'>
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
        <Popular />
      </div>
    )
  }
}


module.exports = App;