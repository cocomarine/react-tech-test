import { render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  let validProps = {
    mockResults: [
      "https://testimage1",
      "https://testimage2",
      "https://testimage3",
    ],
    mockIsLoading: false,
  };

  it("renders SearchResults correctly", () => {
    const rendered = renderer.create(
      <SearchResults 
        results={validProps.mockResults} 
        isLoading={validProps.mockIsLoading} 
      />
    );

    expect(rendered).toMatchSnapshot();
  });

  it("renders correct number of results", () => {
    render(
      <SearchResults 
        results={validProps.mockResults} 
        isLoading={validProps.mockIsLoading} 
      />
    );

    expect(screen.getByAltText("https://testimage1")).toBeInTheDocument();
    expect(screen.getByAltText("https://testimage2")).toBeInTheDocument();
    expect(screen.getByAltText("https://testimage3")).toBeInTheDocument();
  });

  it("shows the 'No matching images. Try again.' message when the results is empty", () => {
    validProps.mockResults = [];

    render(
      <SearchResults 
        results={validProps.mockResults} 
        isLoading={validProps.mockIsLoading} 
      />
    );

    expect(screen.getByText("No matching images. Try again.")).toBeInTheDocument();
  })
});