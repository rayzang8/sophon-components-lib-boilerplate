import * as React from "react";
import { render, getByText } from "@testing-library/react";
import List, {ListItem} from "./List";

describe("List", () => {
  const dataList: ListItem[]= [
    {name: '1'},
    {name: '4'},
    {name: '3'},
  ];

  test("should display text", () => {
    const { container } = render(<List dataList={dataList} />);

    getByText(container, '3');
  });

});