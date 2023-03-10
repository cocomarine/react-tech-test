import React from "react";
import renderer from "react-test-renderer";
import App from "../components/App";

describe("App", () => {
  it("renders App correctly", () => {
    const rendered = renderer.create(<App />);
    expect(rendered).toMatchSnapshot();
  });
});
