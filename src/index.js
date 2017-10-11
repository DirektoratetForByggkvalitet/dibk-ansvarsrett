import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); /* eslint no-undef: 0 */

if (window.location.hostname === 'localhost') {
  registerServiceWorker();
}
