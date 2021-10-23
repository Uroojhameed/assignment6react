import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MediaCard from './Component/MediaCard';
import pic from "./Component/flower.jpeg"
import Gate from './Component/Gate';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
     <MediaCard imageUrl={pic} title="Urooj hameed" body= {<>this is the  <b> body </b>   text </>}  />
     <Gate isOpen={true}/> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();