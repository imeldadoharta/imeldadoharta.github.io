import React from 'react';
import ReactDOM from 'react-dom/client';
//import ParentComponent from './Components/ParentChild/ParentComponent';
import './index.css';
//import App from './App';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//import MainLayout from './Components/Layout/mainlayout';
import Routes from './Routes/routes';
import store from './Redux/Store/index'
//import Example from './Components/useref';
// import Counter, { CounterArrow } from './Components/classCompt';
// import CounterFunct from './Components/functionCompt';
//import Calculator from './Components/Calculator/calculator';
// import KirimNama from './Components/ParentChild/kirimdatanama';
// import Calculator from './Components/Calculator/calculator';
// import ParentDataKaryawan from './Components/ParentChild/parentData';
//import DataKaryawan from './Components/ParentChild/parent';
// import {createBrowserHistory} from 'history'
// const browserHistory = createBrowserHistory()

// browserHistory.listen(location =>{
// setTimeout(()=>{
//   if (location.action === 'POP') {
//     return
//   }
//   window.scrollTo(0,0)
// })
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   

  <React.StrictMode>
  {/* <MainLayout/> */}
  <Provider store={store}>
   <Router  >
      <Routes />
    </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
