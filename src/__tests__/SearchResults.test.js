import React from "react";
import renderer from "react-test-renderer";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("renders SearchResults correctly", () => {
    const rendered = renderer.create(<SearchResults />);
    expect(rendered).toMatchSnapshot();
  });
});