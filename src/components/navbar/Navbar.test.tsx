import { cleanup, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { afterEach, describe, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
  afterEach(cleanup);

  it("should render", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });
});
