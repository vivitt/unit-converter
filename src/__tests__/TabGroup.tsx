import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import TabGroup from "../components/TabGroup";

afterEach(cleanup);

describe("TabGroup", () => {
  test("should render inputs", () => {
    render(<TabGroup />);
    const inputnumber = screen.getByTestId("number");
    expect(inputnumber).toBeInTheDocument();

    const inputresult = screen.getByTestId("text");
    expect(inputresult).toBeInTheDocument();
  });

  test("should numberinput have value", () => {
    render(<TabGroup />);
    const inputnumber = screen.getByTestId("number");

    fireEvent.change(inputnumber, {
      target: { value: "2" },
    });
    expect(inputnumber).toHaveValue(2);
  });

  test("should result input be readonly", () => {
    render(<TabGroup />);
    const inputresult = screen.getByTestId("text");
    expect(inputresult).toHaveAttribute("readOnly");
  });

  test("should render select inputs and get results", () => {
    render(<TabGroup />);

    //should render selects
    const from = screen.getByTestId("From");
    expect(from).toBeInTheDocument();

    const to = screen.getByTestId("To");
    expect(to).toBeInTheDocument();
    //should second select be disabled until first one is selected
    expect(to).toBeDisabled();

    fireEvent.change(from, {
      target: { value: "cup" },
    });
    expect(from).toHaveValue("cup");
    expect(to).not.toBeDisabled();

    //should get results when second select is selected
    const inputnumber = screen.getByTestId("number");
    fireEvent.change(inputnumber, {
      target: { value: "2" },
    });
    const inputresult = screen.getByTestId("text");
    expect(inputresult).toHaveValue("");

    fireEvent.change(to, {
      target: { value: "kilo" },
    });
    expect(to).toHaveValue("kilo");

    expect(inputresult).toHaveValue("0.500");
  });

  test("should navigate Distance conversion", () => {
    render(<TabGroup />);
    const distanceIcon = screen.getByText("🏃🏽‍♀️");
    expect(distanceIcon).toBeInTheDocument();

    fireEvent.click(distanceIcon);
    expect(screen.getByText("Distance")).toBeInTheDocument();

    //should swap units with swap btn
    const from = screen.getByTestId("From");
    fireEvent.change(from, {
      target: { value: "centimeter" },
    });
    const to = screen.getByTestId("To");
    fireEvent.change(to, {
      target: { value: "inch" },
    });

    const swap = screen.getByTestId("swapBtn");
    expect(swap).toBeInTheDocument();

    fireEvent.click(swap);

    expect(from).toHaveValue("inch");
    expect(to).toHaveValue("centimeter");

    //should show correct icon on window size

    window.innerWidth = 199;
    fireEvent(window, new Event("resize"));

    fireEvent.change(from, {
      target: { value: "yard" },
    });
    expect(screen.getByTestId("ver")).toBeInTheDocument();
  });
});
