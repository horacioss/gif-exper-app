import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("tests over <GifGridItem />", () => {
  const img = {
    id: "43h9874d9gh53435g",
    title: "Any Title for an Image",
    url: "https://localhost/werr/4t.jpg",
  };

  let wrapper = shallow(<GifGridItem {...img} />);

  test("should render <GifGridItem />", () => {
    expect(wrapper).toMatchSnapshot();
  });
  /*
   * Testing properties
   */
  test("should paragraph to be equal at title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(img.title);
  });

  test("should image's alt & src to be equal to title url properties of img", () => {
    const image = wrapper.find("img");
    expect(image.prop("src")).toBe(img.url);
    expect(image.props().alt).toBe(img.title);
  });

  test("should contains animated__fadein in className", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("animated__fadein")).toBe(true);
    const className = div.props().className;
    expect(className?.includes("animated__fadein")).toBe(true);
  });
});
