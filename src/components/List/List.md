A very simple List.

```jsx
import  List from "./List";
import {CheckboxCopy} from "../Checkbox";

const dataList = [{ name: 'ha ha ha?' },
                   { name: 'world22' },
                   { name: 'react33' },
                   { name: 'react-dom665' }];
<>
  <List dataList={dataList}/>
  <CheckboxCopy test={"xxx"}/>
</>
```