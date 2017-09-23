const React = require('react');
const ReactRouter = require('react-router-dom');
const Nav = require('./Nav');
const Home = require('./Home');
const Popular = require('./Popular');
const Battle = require('./Battle');
const Profile = require('./Profile');


const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            <Route path='/profile' component={Profile} />
            <Route render={function() {
              return (<p>404 - Not found</p>);
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}


module.exports = App;