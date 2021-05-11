import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import history from './history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk';
import "./scss/main.scss";

console.log('*** process.env *** ', process.env)

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)

const App = React.lazy(() => import('./containers/App'));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history} >
      <React.Suspense fallback={loading}>
        <Switch>
          <Route exact="/" name="Home" render={props => <App {...props} />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
