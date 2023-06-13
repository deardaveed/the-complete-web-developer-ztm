import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import 'tachyons';
import { searchRobots } from './reducers';

const store = createStore(searchRobots);

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
              <App />
            </Provider>);


 