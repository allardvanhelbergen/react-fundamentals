const React = require('react');
const NavLink = require('react-router-dom').NavLink;


let menu = [
  {path: '/', anchor: 'Home'},
  {path: '/battle', anchor: 'Battle'},
  {path: '/popular', anchor: 'Popular'},
  {path: '/profile', anchor: 'Profile'},
];


function Nav() {
  return (
    <ul className='nav'>
      {menu.map(function(menuItem, i) {
        return (
          <li key={'nav-item-' + i} className='nav-item'>
            <NavLink
                exact
                className='navlink'
                activeClassName='navlink--active'
                to={menuItem.path}
            >
              {menuItem.anchor}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}


module.exports = Nav;