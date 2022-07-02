import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';

import './index.scss';
import App from './App';
import store from './service/store';


const root = createRoot(document.getElementById('root')!);

root.render( 
  <StrictMode>
   <Provider store={store}>
   <App /> 
   </Provider>
  </StrictMode>
);