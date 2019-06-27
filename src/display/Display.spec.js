// Test away!
/*
displays if gate is open/closed and if it is locked/unlocked
displays 'Closed' if the closed prop is true and 'Open' if otherwise
displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
when locked or closed use the red-led class
when unlocked or open use the green-led class
*/
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import Controls from "./Display";

describe("<Display />", () => {
  it("should show open sign is active", () => {
    const { getByText } = render(<Controls locked={false} closed={false} />);
    const open = getByText(/open/i);
    expect(open).toBeTruthy();
  });

  it("should show close sign is active", () => {
    const { getByText } = render(<Controls locked={false} closed={true} />);
    const closed = getByText(/closed/i);
    expect(closed).toBeTruthy();
  });

  it("should show Unlock sign is active", () => {
    const { getByText } = render(<Controls locked={false} closed={true} />);
    const unlock = getByText(/unlocked/i);
    expect(unlock).toBeTruthy();
  });

  it("should show lock sign is active", () => {
    const { getByText } = render(<Controls locked={true} closed={true} />);
    const locked = getByText(/locked/i);
    expect(locked).toBeTruthy();
  });
});
