import PropTypes from "prop-types";

import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <div
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        className="animate__animated animated__fadein"
      >
        {loading ? (
          <p className="animate__flash">Loading...</p>
        ) : (
          images.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })
        )}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
