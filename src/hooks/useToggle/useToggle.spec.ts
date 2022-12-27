import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  it("should initialize false", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.state).toBe(false);
  });

  it("should change state to true before false", () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.toggle();
    });

    expect(result.current.state).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.state).toBe(false);
  });
});
