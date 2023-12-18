import styled from "styled-components";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <FavButton type="button" onClick={onToggleFavorite}>
      {isFavorite ? "Saved" : "Save"}
    </FavButton>
  );
}

const FavButton = styled.button`
  background-color: gray;
`;
