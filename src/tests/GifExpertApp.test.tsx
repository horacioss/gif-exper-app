import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("tests over <GifExpertApp />", () => {
  test("should render <GifExpertApp /> corectly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should have 2 <GifGrid /> elements", () => {
    const categories = ["Samurai X", "Dragon Ball"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
