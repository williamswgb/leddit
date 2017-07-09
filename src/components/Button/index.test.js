import React from "react";
import { shallow } from "enzyme";
import Button from './index';

describe("Button", () => {
  it("always renders a button", () => {
    const renderedComponent = shallow(
      <Button></Button>
    );
    expect(
      renderedComponent.find("button").node
    ).toBeDefined();
  });

  it('contains its className', () => {
    const className = "testClassName";
    const renderedComponent = shallow(
      <Button className={className} />
    );
    expect(renderedComponent.prop('className')).toEqual(expect.stringContaining(className));
  });

  it('renders its text', () => {
    const text = "Click me!";
    const renderedComponent = shallow(
      <Button text={text} />
    );
    expect(renderedComponent.contains(text)).toEqual(true);
  });

  it("handles clicks", () => {
    const onClickSpy = jest.fn();
    const renderedComponent = shallow(<Button onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click', { preventDefault() {} });
    expect(onClickSpy).toHaveBeenCalled();
  });
});
