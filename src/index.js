/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Tp1 from './tp1' ;
import JeuDe from './components/JeuDe'

import MainRoutage from "./mainRoutage";
import AppRoutage from "./AppRoutage"
export default function ListeEvenements({ liste }) {
  return (
    <div>
      <JeuDe cache={2}
      //cache={2} kat3ni belli l'utilisateur khaso ykhrrej numéro 2 bach yrbe7
      />


    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppRoutage/>
);

reportWebVitals();
*/
import React from 'react';

import ReactDOM from 'react-dom/client';
import './style.css';

import { legacy_createStore as createStore } from 'redux';
import AppTache from './appTache';
import { Provider } from 'react-redux';

import reducerTache from './reducers/reducerTache';
const Mystore = createStore(reducerTache);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={Mystore}>
    <React.StrictMode>  
      <AppTache/>
    </React.StrictMode>
  </Provider>);
/*createStore(ReducerFruit) : kaysawb l’coffre-fort b l’reducer.
Provider : kaywفر l’store l koll les composants.
 Bla Provider, useSelector o useDispatch ma ykhdmouch.
 /*import React from "react";
 import ReactDOM from "react-dom/client"
 import { Provider } from "react-redux";
 import {createStore} from "react-redux"
 import { BrowserRouter } from "react-router-dom";
 import AppTache from "./appTache"
 import reducerTache from "./config/reducerTache"

 const store = createStore(reducerTache)

 const root = ReactDOM.createRoot(document.getElementById("root"))
 root.render(
  <provider store={store}>
    <BrowserRouter>
    <AppTache/>
    </BrowserRouter>
  </provider>
 )*/
