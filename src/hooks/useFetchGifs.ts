import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { image } from "../types/image";

interface myState {
  data: image[];
  loading: boolean;
}

export const useFetchGifs = (category: string) => {
  const [state, setState] = useState<myState>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  });

  return state;
};
