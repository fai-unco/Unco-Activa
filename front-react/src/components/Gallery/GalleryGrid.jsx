import Thumb from "components/Thumb/Thumb";

export default function GalleryGrid({ photos, startIndex, onSelect }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
      {photos.map((p, i) => {
        const realIndex = startIndex + i;
        return (
          <Thumb
            key={realIndex}
            src={p.thumb}
            onClick={() => onSelect(realIndex)}
          />
        );
      })}
    </div>
  );
}