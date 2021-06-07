import EnterPage from './pages/Enter'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import './hover.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <EnterPage/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
