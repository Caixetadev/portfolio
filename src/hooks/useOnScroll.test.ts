import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useOnScroll } from "./useOnScroll";

describe("useOnScroll", () => {
  it("should be true when scroll is greater than or equal to 200 and false if less than 200", () => {
    const { result } = renderHook(() => useOnScroll(200));

    fireEvent.scroll(window, { target: { scrollY: 199 } });

    expect(result.current.scrollIsGreaterThanHeight).toBe(false);

    fireEvent.scroll(window, { target: { scrollY: 200 } });

    expect(result.current.scrollIsGreaterThanHeight).toBe(true);
  });
});
