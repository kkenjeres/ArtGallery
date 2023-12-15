import React from "react";
import Image from "next/image";
const ArtPiecePreview = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="card">
          <p>{item.name}</p>
          <p>{item.artist}</p>
          <Image
            src={item.imageSource}
            width={100}
            height={100}
            alt={item.name}
          />
        </div>
      ))}
    </>
  );
};

export default ArtPiecePreview;
