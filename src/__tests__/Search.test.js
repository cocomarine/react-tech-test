import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    mockSetSearchResults: jest.fn(),
    mockSetIsLoading: jest.fn()
  }

  it("renders Search correctly", () => {
    const rendered = renderer.create(
      <Search 
        setSearchResults={validProps.mockSetSearchResults}
        setIsLoading={validProps.mockSetIsLoading} 
      />
    );
    expect(rendered).toMatchSnapshot();
  });

  it("render a single button with correct text", () => {
    render(
      <Search 
        setSearchResults={validProps.mockSetSearchResults}
        setIsLoading={validProps.mockSetIsLoading} 
      />
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent("Go!");
  });

  it("button calls correct function", async () => {
    render(
      <Search 
        setSearchResults={validProps.mockSetSearchResults}
        setIsLoading={validProps.mockSetIsLoading} 
      />
    );

    await fireEvent.click(screen.getByRole("button"));

    expect(validProps.mockSetSearchResults).toHaveBeenCalled();
    expect(validProps.mockSetIsLoading).toHaveBeenCalled();
  });
});
