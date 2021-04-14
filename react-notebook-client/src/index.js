import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';
import RouterMap from './router'

ReactDOM.render(
  <React.StrictMode>
    <RouterMap />
  </React.StrictMode>,
  document.getElementById('root')
);

