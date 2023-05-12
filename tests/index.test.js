import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";


describe("Calculator", () => {
    it("renders a homepage", () => {
      render(<Home />);
      // check if all components are rendered

    });
  });