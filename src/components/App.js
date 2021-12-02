import Categories from './Categories';
import Router from './Router';
import SignUp from './SignUp';
import login from './login';
import Counters from './Counters';
import Puzzles from './Puzzles';
import {
  BrowserRouter, 
  Switch,
  Route,
  } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Router}/>
          <Route path='/categories' component={Categories}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/login' component={login}/>
          <Route path='/counters' component={Counters}/>
          <Route path='/puzzles' component={Puzzles}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
