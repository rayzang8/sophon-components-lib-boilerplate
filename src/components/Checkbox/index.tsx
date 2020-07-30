import * as React from 'react';

import { Checkbox, Button } from 'antd';

import { CheckboxProps, CheckboxChangeEvent } from 'antd/lib/checkbox';

import 'antd/es/button/style/index.css';
import 'antd/es/checkbox/style/index.css';

export type ChangeEvent = CheckboxChangeEvent;

/**
 * 属性
 */
interface CheckboxCopyProps extends CheckboxProps {
  /** 测试文档 */
  test: string;
}

function CheckboxCopy (props: CheckboxCopyProps) {
  return (
    <>
      <Checkbox {...props} />
      <Button type="primary">test8888</Button>
    </>
  );
}

// export const CheckboxGroup = Checkbox.Group;

export { CheckboxCopy };
// export default CheckboxCopy;
