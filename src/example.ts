import React from 'react';
import ReactDOM from 'react-dom';
import List, {ListItem} from './components/List/List';


const dataList: ListItem[] = [
  { name: 'ha ha ha!!!!!' },
  { name: 'world22' },
  { name: 'react33' },
  { name: 'react-dom225' },
]


ReactDOM.render(
  React.createElement(List, { dataList }, null),
  document.getElementById('App')
);