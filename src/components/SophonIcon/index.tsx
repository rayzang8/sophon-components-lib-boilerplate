import * as React from 'react';
import './index.less';
import cs from 'classnames';
import _noop from 'lodash/noop';
import Tooltip from 'antd/es/tooltip';
import 'antd/es/tooltip/style';

type MouseEventHandler = (e: React.MouseEvent<any>) => void;

export interface SophonIconProps {
  className: string;
  style?: {[index: string]: string};
  title?: string;
  hint?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  onMouseEnter?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
}

export default function SophonIcon(props: SophonIconProps) {
  const {className, title, hint, onClick, onMouseEnter, onMouseLeave, style, disabled} = props;
  const body = <i title={title}
    className={cs(`sophon-icon ${className} ${className || ''}`,
      {disabled: !!disabled})}
    onClick={(e) => {
      (onClick || _noop)(e);
    }}
    onMouseEnter={(e) => {
      (onMouseEnter || _noop)(e);
    }}
    onMouseLeave={(e) => {
      (onMouseLeave || _noop)(e);
    }}
    style={style || {}}/>;

  return hint ?
    <Tooltip title={hint} placement='bottom'>
      {body}
    </Tooltip>
    : body;
}
