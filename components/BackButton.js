import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #000;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  border: 1px solid black;

  &:hover {
    background-color: transparent;
    border: 1px solid black;
    color: black;
  }
`;

const BackButton = () => {
  const router = useRouter();
  return <StyledButton onClick={() => router.back()}>← back</StyledButton>;
};

export default BackButton;