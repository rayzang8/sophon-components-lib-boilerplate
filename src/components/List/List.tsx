import * as React from 'react';
import css from './List.module.less';
import { withTranslation, WithTranslation } from 'react-i18next';
import '../../locales/i18n';
import '../../icon-fonts/style.css';
import SophonIcon from "../SophonIcon/index";

export interface ListItem {
  name: string;
}

/**
 * List properties.
 */
interface ListProps extends WithTranslation {
  /** ul li形式展示列表， 传入一个有name 属性的对象数组 */
  dataList: ListItem[];
}

class List extends React.Component<ListProps> {

  render() {
    const {dataList = [], t} = this.props;
    return (
      <ul className={css.listItem}>
        { dataList.map(function(item, index) {
          return ( <li key={index}><SophonIcon className={'isophon-folder'} style={{color: 'red'}}/><span className={css.bgc}>{t('loading')}-{item.name}</span></li> );
        })}
      </ul>
    );
  }
}

export default withTranslation('common')(List);