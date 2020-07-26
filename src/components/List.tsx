import React from 'react';
import css from './List.less';
import {ListProps} from "./List.types";

class List extends React.Component<ListProps> {

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

export default List;

