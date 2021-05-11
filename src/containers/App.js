import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Router, Switch, useHistory } from 'react-router-dom';
import Header from '../components/header/header.jsx';
import Main from './Main/Main.js';
import Registration from './Registration/Registration.js';
import '../scss/app.scss'
import Footer from '../components/footer/footer.jsx';
import LoginModal from './LoginModal/LoginModal.js';
import FAQ from './FAQ/FAQ.js';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy.js';
import ScrollToTop from '../components/scrollToTop/scrollToTop.js';

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const history = useHistory()

  return (
    <div className="App">
      <Header onOpenLoginModal={() => setLoginModalOpen(true)} />
      <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <div className="container">
      <ScrollToTop>
        <Router basename="/" history={history}>
          <Switch>
            <Route path="/registration" component={Registration} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/faq" component={FAQ} />
            <Route exact path="/" component={Main} />
            <Redirect to="/a" />
          </Switch>
        </Router>
        </ScrollToTop>
      </div>
      <Footer onOpenLoginModal={() => setLoginModalOpen(true)} />
    </div>
  );
}

export default App;
