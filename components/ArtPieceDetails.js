import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <PieceDetailsWrapper>
      <Link href="/art-pieces">Back to Art Pieces</Link>
      <Image src={image} alt={title} width={150} height={150} />
      <p>{title}</p>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </PieceDetailsWrapper>
  );
}

const PieceDetailsWrapper = styled.section`
  border: 1px solid black;
`;
