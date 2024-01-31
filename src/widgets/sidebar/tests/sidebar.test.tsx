import { render, screen } from "@testing-library/react";
import { Sidebar } from "~/widgets/sidebar";

describe("Sidebar tests", () => {
  it("sidebar button", () => {
    render(<Sidebar />);
    const sidebar = screen.getByRole("button");
    expect(sidebar).toBeInTheDocument();
  });
});
