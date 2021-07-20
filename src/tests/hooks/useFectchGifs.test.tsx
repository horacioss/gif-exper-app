import { act, renderHook } from "@testing-library/react-hooks/dom";

import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("tests over our useFectchGifs custom hook", () => {
  test("should return the initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );

    await waitForNextUpdate({ timeout: 5000 });

    const { data, loading } = result.current;
    expect(data.length).toEqual(12);
    expect(loading).toBe(false);
  });

  test("should return a array of images an laoding to be false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Dragon Ball")
    );

    await waitForNextUpdate({ timeout: 5000 });

    const { data, loading } = result.current;

    expect(data.length).toBe(12);
    expect(loading).toBe(false);
  });
});
