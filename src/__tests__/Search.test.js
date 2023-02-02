import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import Search from "../components/Search";

describe("Search", () => {
  const validProp = jest.fn();

  it("renders Search correctly", () => {
    const rendered = renderer.create(<Search setSearchResults={validProp} />);
    expect(rendered).toMatchSnapshot();
  });

  // it("renders value of prop correctly", () => {
  //   render(<Search setSearchResults={validProp} />);

  // });

  // it("renders correct search input", () => {
  //   render(<Search setSearchResults={validProp} />);

  // });
});