import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyDJYuQuEpvhwXBYDoKDB-ps1xGWn9iQysQ",
  authDomain: "foodapp-59381.firebaseapp.com",
  projectId: "foodapp-59381",
  storageBucket: "foodapp-59381.appspot.com",
  messagingSenderId: "811468472782",
  appId: "1:811468472782:web:cf63c0f9652971276dab9f"
  //apiKey: process.env.REACT_APP_API_KEY,
  //authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //databaseURL: process.env.REACT_APP_DB_URL,
  //projectId: process.env.REACT_APP_PROJECT_ID,
  //storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);














//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';





//ReactDOM.render(
  //<React.StrictMode>
   // <App />
  //</React.StrictMode>,
 // document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
