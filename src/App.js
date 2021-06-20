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
          <Route exact path="/loginpage" component={LoginPage} />
          <Route exact path="/signuppage" component={SignupPage} />
          <Route exact path="/forgetpwdpage" component={ForgetpwdPage} />
          <Route exact path="/profilepage" component={ProfilePage} />
          <Route exact path="/feedpage" component={FeedPage} />
          <Route exact path="/youtuberpage" component={YoutuberPage} />
          <Route exact path="/ytSinglepage" component={YTSinglePage} />
          <Route path="/products/:cate/:productId" component={ProductPage} />
          <Route exact path="/Productpage" component={ProductPage} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>

  );
}

export default App;
