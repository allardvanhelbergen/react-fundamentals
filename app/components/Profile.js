const React = require('react');
const Badge = require('./Badge');
const Users = require('./Users');


function Profile() {
  return(
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
  );
}


module.exports = Profile;