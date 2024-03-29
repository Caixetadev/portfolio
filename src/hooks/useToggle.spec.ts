import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "./useToggle";

describe("useToggle", () => {
  it("should initialize false", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.state).toBe(false);
  });

  it("should toggle the state", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.state).toBe(false);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.state).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.state).toBe(false);
  });

  test("should define initial state", () => {
    const { result } = renderHook(() => useToggle(true));

    expect(result.current.state).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(result.current.state).toBe(false);
  });
});
