import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("header test", () => {
  it("check for header", () => {
    render(<App />);

    const header = screen.getByTitle("header");

    expect(header).toBeInTheDocument();
  });
});
