import { render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  let mockResults = [
      "https://testimage1",
      "https://testimage2",
      "https://testimage3",
  ];

  it("renders SearchResults correctly", () => {
    const rendered = renderer.create(<SearchResults results={mockResults}/>);
    expect(rendered).toMatchSnapshot();
  });

  it("renders correct number of results", () => {
    render(<SearchResults results={mockResults} />);

    expect(screen.getByAltText("https://testimage1")).toBeInTheDocument();
    expect(screen.getByAltText("https://testimage2")).toBeInTheDocument();
    expect(screen.getByAltText("https://testimage3")).toBeInTheDocument();
  });

  it("shows 'No results' message when the results is empty", () => {
    mockResults = [];

    render(<SearchResults results={mockResults} />);

    expect(screen.getByText("No results")).toBeInTheDocument();
  })
});