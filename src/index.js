import React from 'react';
import ReactDOM from 'react-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { configureStore } from './app/ConfigureStore';
import ScrollToTop from './app/common/util/ScrollToTop';
import { loadEvent } from './features/event/eventActions';

const store = configureStore();
store.dispatch(loadEvent());

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <ReduxToastr
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
        <App />
      </BrowserRouter>
    </Provider>,
    // </React.StrictMode>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
