import { memo } from 'react';
import ImageBackground from './ImageBackground';

const CarouselItem = memo(({ img, isCenter, onClick }) => {
  return (
    <div className={`flex justify-center items-center rounded-xl overflow-hidden flex-shrink-0 w-full sm:w-1/3 ${isCenter ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-50'}`}>
      <ImageBackground>
        {!isCenter && (
          <div className="absolute inset-0 bg-black/30 z-10" />
        )}
        <img
          draggable={false}
          onClick={onClick}
          src={img.thumb}
          className="select-none w-full h-full object-cover"
        />
      </ImageBackground>
    </div>
  );
});

export default CarouselItem;