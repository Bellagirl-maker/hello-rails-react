import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Use BrowserRouter here
import store from './app/store';
import Greeting from './components/Greeting';

function App() {
  return (
    <div>
      <h2>Welcome to React + Rails</h2>
      <small>Navigate to '/greeting' endpoint to see random message...</small>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router> {/* Use BrowserRouter here */}
        <Route exact path="/" component={App} />
        <Route exact path="/greeting" component={Greeting} />
      </Router>
    </Provider>
  </React.StrictMode>
);
