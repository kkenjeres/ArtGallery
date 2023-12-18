import Image from "next/image";
import styled from "styled-components";
import BackButton from "./BackButton";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <BackButton />
      <PieceDetailsWrapper>
        <Image src={image} alt={title} width={150} height={150} />
        <p>{title}</p>
        <p>{artist}</p>
        <p>{year}</p>
        <p>{genre}</p>
      </PieceDetailsWrapper>
    </>
  );
}

const PieceDetailsWrapper = styled.section`
  border: 1px solid black;
`;


