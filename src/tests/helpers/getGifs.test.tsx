import { getGifs } from "../../helpers/getGifs";

describe("tests over getGifs", () => {
  jest.setTimeout(20000);

  test("should get 10 items from API", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(12);
  });
});
