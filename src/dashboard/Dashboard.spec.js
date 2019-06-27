import React from "react";
import { render } from "react-testing-library";
import "@testing-library/react/cleanup-after-each";
import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";
import Display from "../display/Display";
import "jest-dom/extend-expect";

// Test away
/*
shows the controls and display
*/

describe("<Dashboard />", () => {
  it("should render dashboard without crashing", () => {
    render(<Dashboard />);
  });

  it("should render controls without crashing", () => {
    render(<Controls />);
  });

  it("should render controls without crashing", () => {
    render(<Display />);
  });
});
