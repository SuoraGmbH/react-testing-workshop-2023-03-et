import useProjects from "./useProjects";
import { renderHook } from "@testing-library/react";
import { AllTheProviders } from "../../tests/test-utils";

test("it should initially be in loading state", () => {
  const { result } = renderHook(() => useProjects(), {
    wrapper: AllTheProviders,
  });

  expect(result.current.isLoading).toBeTruthy();
});
