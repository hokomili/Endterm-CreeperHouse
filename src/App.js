import EnterPage from './pages/Enter';
import HomePage from './pages/Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import './hover.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/HomePage" component={HomePage} />
        <EnterPage/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
