import * as React from 'react';
import css from './List.module.less';

export interface ListItem {
  name: string;
}

interface ListProps {
  dataList: ListItem[];
}

export default class List extends React.Component<ListProps> {

  render() {
    const { dataList = [] } = this.props;
    return (
      <ul className={css.listItem}>
        { dataList.map(function(item, index){
          return ( <li key={index}><span className={css.bgc}>{item.name}</span></li> )
        }) }
      </ul>
    )
  }
}


