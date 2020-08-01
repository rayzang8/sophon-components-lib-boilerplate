import * as React from 'react';
import ReactDOM from 'react-dom';
import List, {ListItem} from '../components/List/List';
import {CheckboxCopy} from "../components/Checkbox/index";


const dataList: ListItem[] = [
  { name: 'ha ha ha!!!!!' },
  { name: 'world22' },
  { name: 'react33' },
  { name: 'react-dom0099' },
];

function MyExample() {
  return <>
    <List dataList={dataList} />
    <CheckboxCopy test={'zanghui'}/>
  </>;
}

ReactDOM.render(
  React.createElement(MyExample as any),
  document.getElementById('App')
);