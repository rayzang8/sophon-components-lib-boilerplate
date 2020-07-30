import * as React from 'react';
import css from './List.module.less';

export interface ListItem {
  name: string;
}

/**
 * List properties.
 */
interface ListProps {
  /** ul li形式展示列表， 传入一个有name 属性的对象数组 */
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


