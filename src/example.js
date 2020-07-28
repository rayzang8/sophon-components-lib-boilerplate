import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
// import {ListItem} from "./components/List";


const dataList= [
  { name: 'ha ha ha!!!!!' },
  { name: 'world22' },
  { name: 'react33' },
  { name: 'react-dom10101' },
]


ReactDOM.render(
  React.createElement(List, { dataList }, null),
  document.getElementById('App')
);