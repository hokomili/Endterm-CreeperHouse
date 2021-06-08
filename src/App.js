import {BrowserRouter,Switch,Route} from 'react-router-dom';

import EnterPage from './pages/Enter';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

import './App.css';
import './hover.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EnterPage} />
        <Route exact path="/HomePage" component={HomePage} />
        <Route exact path="/LoginPage" component={LoginPage} />
        

      </Switch>
    </BrowserRouter>

  );
}

export default App;
