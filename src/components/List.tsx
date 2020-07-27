import React from 'react';
import css from './List.less';

export interface ListItem {
  name: string;
}

export interface ListProps {
  dataList: ListItem[];
}


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

