import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2 className="my-8 text-4xl font-semibold">{category}</h2>

      {isLoading && <p className="text-3xl">Cargando...</p>}

      <div className="flex flex-wrap justify-center gap-6">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
