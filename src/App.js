import {BrowserRouter,Switch,Route} from 'react-router-dom';

import EnterPage from './pages/Enter';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import ForgetpwdPage from './pages/Forgetpwd';
import ProfilePage from './pages/Profile';
import FeedPage from './pages/ProfilesFeed';
import YoutuberPage from './pages/Youtube';
import YTSinglePage from './pages/YoutubeSingle';
import CategoryPage from './pages/Category';
import ProductPage from './pages/Product';
import Feed from './pages/Feed'
import { StoreProvider } from "./store";

import './App.css';
import './hover.css';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={EnterPage} />
          <Route exact path="/testfeed" component={Feed} />
          <Route exact path="/category/:pageName" component={CategoryPage} />
          <Route exact path="/homepage" component={HomePage} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <Route exact path="/SignupPage" component={SignupPage} />
          <Route exact path="/ForgetpwdPage" component={ForgetpwdPage} />
          <Route exact path="/ProfilePage" component={ProfilePage} />
          <Route exact path="/FeedPage" component={FeedPage} />
          <Route exact path="/YoutuberPage" component={YoutuberPage} />
          <Route exact path="/YTSinglePage" component={YTSinglePage} />
          <Route path="/products/:cate/:productId" component={ProductPage} />
          <Route exact path="/ProductPage" component={ProductPage} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>

  );
}

export default App;
