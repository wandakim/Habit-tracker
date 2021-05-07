import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';


ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
// App은 app.jsx에서 가져온 루트 컴포넌트 . 
// getElementById('rood')로 가져온 요소는 사용자에게 보여질 html 의 요소. 
// ReactDom을 이용해서 둘을 연결 기켜준다. 
// 이게 여기서 일어나는 일. 