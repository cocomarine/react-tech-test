import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import Search from "../components/Search";

describe("Search", () => {
  const mockSetSearchResults = jest.fn();

  it("renders Search correctly", () => {
    const rendered = renderer.create(<Search setSearchResults={mockSetSearchResults} />);
    expect(rendered).toMatchSnapshot();
  });

  it("render a single button with correct text", () => {
    render(<Search setSearchResults={mockSetSearchResults} />);

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent("Go!");
  });

  it("button calls correct function", async () => {
    render(<Search setSearchResults={mockSetSearchResults} />);

    await fireEvent.click(screen.getByRole("button"));

    expect(mockSetSearchResults).toHaveBeenCalled();
  });
});