import { renderWithTheme } from "../../utils/tests/helpers";

import { Title } from ".";

describe("<Title />", () => {
  it("should render title", () => {
    const { getByText } = renderWithTheme(<Title>My Title</Title>);

    expect(getByText("My Title")).toBeInTheDocument();
  });
});
