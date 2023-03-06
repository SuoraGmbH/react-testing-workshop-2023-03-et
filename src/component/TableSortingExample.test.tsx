import { render } from "@testing-library/react";
import Greeting from "../page/Home/Greeting";

test("showcase snapshot testing", () => {
  const { container } = render(<Greeting />);

  expect(container).toMatchSnapshot();
});

test("showcase snapshot testing 2", () => {
  expect({ hello: "world" }).toMatchInlineSnapshot(`
    Object {
      "hello": "World",
    }
  `);
});
const HugeTableComponent: any = "";
xit("big table test", () => {
  const { container } = render(<HugeTableComponent />);

  // Would be rather fragile, because it breaks everytime somechanges the rendering of rows
  expect(container).toMatchSnapshot();
});

// against best practices
xit("shallow big table test", () => {
  // this code is probably broken, but close
  const shallow: any = "";
  const { container } = shallow(<HugeTableComponent />);

  // Would be rather fragile, because it breaks everytime somechanges the rendering of rows
  expect(container).toMatchInlineSnapshot(`
  <table>
    <tbody>
    <TableRowComponent columns=[{id: 12312, /…/}] />
    <TableRowComponent columns=[{/…/}] />
    <TableRowComponent columns=[{/…/}] />
    <TableRowComponent columns=[{/…/}] />
    <TableRowComponent columns=[{/…/}] />
</tbody>
  </table>
  
  `);
});
