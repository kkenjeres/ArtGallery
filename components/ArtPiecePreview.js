import React from "react";
import Image from "next/image";

const ArtPiecePreview = ({ data, random }) => {
  return (
    <>
      <div key={data.id}>
        <p>{data.name}</p>
        <p>{data.artist}</p>
        <Image
          src={data.imageSource}
          width={100}
          height={100}
          alt={data.name}
        />
      </div>
    </>
  );
};

export default ArtPiecePreview;
