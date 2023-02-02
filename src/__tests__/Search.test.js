import React from "react";
import renderer from "react-test-renderer";
import Search from "../components/Search";

describe("Search", () => {
  it("renders Search correctly", () => {
    const rendered = renderer.create(<Search />);
    expect(rendered).toMatchSnapshot();
  });
});