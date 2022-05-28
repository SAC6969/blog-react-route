import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { BrowserRouter as Router } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyCxOyjFuJO7RdH8oYrRmmrYcaShWVzF7e8",
  authDomain: "blog-hooks-f83fe.firebaseapp.com",
  projectId: "blog-hooks-f83fe",
  storageBucket: "blog-hooks-f83fe.appspot.com",
  messagingSenderId: "908121020234",
  appId: "1:908121020234:web:73fb83f30012af7fa813b3"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

