import { image } from "../types/image";

const GifGridItem: React.FC<image> = ({ url, title }) => (
  <div className="card animate__animated animated__fadein">
    <img src={url} alt={title} />
    <p className="title-image">{title}</p>
  </div>
);

export default GifGridItem;
