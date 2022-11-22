import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Home from './view/Home';

it('should render title in home', () => {
  render(<Home />);
  const textElement = screen.getByText(/gatito astral/i);
  expect(textElement).toBeInTheDocument();
});

it("should correctly set default option", () => {
    render(<Home />);
      expect(
        screen.getByRole("option", { name: "Select a CatAstral" }).selected
      ).toBe(true);
})

it("should display the correct number of options", () => {
    render(<Home />);
    expect(screen.getAllByRole("option").length).toBe(13);
});


it("should allow user to change options", () => {
  render(<Home/>);
  userEvent.selectOptions(
    // User Find the select element
    screen.getByRole("combobox"),
    // User Find and select the February option.
    screen.getByRole("option", { name: "February" })
  );
  expect(screen.getByRole("option", { name: "February" }).selected).toBe(true);
});

