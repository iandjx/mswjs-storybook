/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "../components/NotFound";
import { mocked } from "ts-jest/utils";
import { sum } from "../components/sum";

jest.mock("../components/sum");

describe("App", () => {
  it("renders without crashing", () => {
    const mockedSum = mocked(sum);
    mockedSum.mockImplementationOnce(() => 4);
    render(<NotFound />);
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
