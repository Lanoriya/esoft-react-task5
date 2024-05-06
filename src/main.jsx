import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'tailwindcss/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={'/esoft-react-task5/'}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
