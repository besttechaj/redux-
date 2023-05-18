import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//importing store
import store from './store';

//we need one provider so that redux concept is accessible to full application/components in the application
import { Provider } from 'react-redux';

store.subscribe(() => {
  console.log(store.getState());
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* passing redux store as an prop inside my provider so that store is accessible from any component  */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
