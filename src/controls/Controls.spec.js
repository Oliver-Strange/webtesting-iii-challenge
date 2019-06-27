// Test away!
/*
Controls Component
provide buttons to toggle the closed and locked states.
buttons' text changes to reflect the state the door will be in if clicked
the closed toggle button is disabled if the gate is locked
the locked toggle button is disabled if the gate is open
*/
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "@testing-library/react/cleanup-after-each";

import Controls from "./Controls";

describe("<Controls />", () => {
  it("should display lock/unlock button", () => {
    const { queryByText } = render(<Controls />);
    expect(queryByText(/lock/i)).toBeTruthy();
  });

  it("should toggle lock/unlock when clicked", () => {
    const switches = jest.fn();

    const { getByText } = render(
      <Controls
        locked={false}
        closed={true}
        toggleLocked={switches}
        toggleClosed={switches}
      />
    );

    fireEvent.click(getByText(/lock gate/i));

    expect(switches).toHaveBeenCalled();
  });

  xit("should toggle open/closed when clicked, if not locked", () => {
    const switches = jest.fn();
  });
});
