import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";


describe("interview-app", () => {
    it("renders a homepage", () => {
      render(<Home />);
      expect(screen.getByText("Winden!")).toBeInTheDocument();
    });
  });