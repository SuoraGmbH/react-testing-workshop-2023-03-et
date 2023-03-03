import useProjects from "./useProjects";
import { renderHook, waitFor } from "@testing-library/react";
import { AllTheProviders } from "../../tests/test-utils";

test("it should initially be in loading state", () => {
  const { result } = renderHook(() => useProjects(), {
    wrapper: AllTheProviders,
  });

  expect(result.current.isLoading).toBeTruthy();
});

it("eventually is not in loading state anymore", async () => {
  const { result } = renderHook(() => useProjects(), {
    wrapper: AllTheProviders,
  });

  return waitFor(() => expect(result.current.isLoading).toBeFalsy());
});

it("eventually is in success state", async () => {
  const { result } = renderHook(() => useProjects(), {
    wrapper: AllTheProviders,
  });

  return waitFor(() => expect(result.current.isSuccess).toBeTruthy());
});
