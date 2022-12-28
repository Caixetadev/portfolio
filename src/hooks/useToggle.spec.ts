import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  it("should initialize false", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.state).toBe(false);
  });

  it("should change the state to true and then to false", () => {
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
