import React from "react";
import { shallow, mount } from "enzyme";
import InputTextBox from './index';

describe("Input Text Box", () => {
  it("always renders an input text box", () => {
    const renderedComponent = shallow(<InputTextBox />);
    expect(renderedComponent.find("div").node).toBeDefined();
  });

  it("contains everything else that gets rendered", () => {
    const divs = mount(<InputTextBox />).find("div");
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(mount(<InputTextBox />).children());
  });

  it("renders input when multiline props is not specified", () => {
    const renderedComponent = mount(<InputTextBox />);
    expect(renderedComponent.find("input").node).toBeDefined();
  });

  it("renders textarea when multiline props is specified", () => {
    const renderedComponent = mount(<InputTextBox multiLine />);
    expect(renderedComponent.find("textarea").node).toBeDefined();
  });

  it('contains its className when input is rendered', () => {
    const className = "testClassName";
    const renderedComponent = mount(<InputTextBox className={className} />);
    expect(renderedComponent.find("input").prop('className'))
      .toEqual(expect.stringContaining(className));
  });

  it('contains its className when textarea is rendered', () => {
    const className = "testClassName";
    const renderedComponent = mount(<InputTextBox multiLine className={className} />);
    expect(renderedComponent.find("textarea").prop('className'))
      .toEqual(expect.stringContaining(className));
  });

  it('handles onChange when input is rendered', () => {
    const onChangeSpy = jest.fn();
    const renderedComponent = mount(<InputTextBox onChange={onChangeSpy} />);
    expect(renderedComponent.find("input").simulate('change'));
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('handles onChange when textarea is rendered', () => {
    const onChangeSpy = jest.fn();
    const renderedComponent = mount(<InputTextBox multiLine onChange={onChangeSpy} />);
    expect(renderedComponent.find("textarea").simulate('change'));
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('contains correct value when input is rendered', () => {
    const value = 'test';
    const renderedComponent = mount(<InputTextBox value={value} />);
    expect(renderedComponent.find("input").prop('value')).toEqual(value);
  });

  it('contains correct value when textarea is rendered', () => {
    const value = 'test';
    const renderedComponent = mount(<InputTextBox multiLine value={value} />);
    expect(renderedComponent.find("textarea").prop('value')).toEqual(value);
  });

  it('show correct error message when error props is specified', () => {
    const error = 'error';
    const renderedComponent = mount(<InputTextBox error={error} />);
    expect(renderedComponent.find('.Input-error')).toBeDefined()
  });
});
