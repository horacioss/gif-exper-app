import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("tests over <AddCategory />", () => {
  const setCategories = jest.fn();
  const value = "Samurai X";
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should render component Correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change the value of input", () => {
    const input = wrapper.find("input");

    input.simulate("change", { target: { value } });
  });

  test("should not submit data from onSubmit...", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("should call setCategories() & clear text box", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop("value")).toBe("");
  });
});
