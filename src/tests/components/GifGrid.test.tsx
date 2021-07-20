import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("test over <GifGrid /> component", () => {
  const category = "Dragon Ball";

  const mockedUseFetchGifs = useFetchGifs as jest.MockedFunction<
    typeof useFetchGifs
  >;

  //let wrapper = shallow(<GifGrid category={category} />);

  //beforeEach(() => {
  //jest.clearAllMocks();
  //wrapper = shallow(<GifGrid category={category} />);
  //});

  test("should render corectly component", () => {
    mockedUseFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show item after data it was loaded by useFetchGifs", () => {
    const gifs = [
      {
        id: "3r48gh8f7g7345t5rfq2",
        title: "Any title",
        url: "https://localhost/any/thing.jpg",
      },
    ];

    mockedUseFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
