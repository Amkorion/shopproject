import React from "react";
import { useNavigate } from "react-router-dom";
import { DirectiryItemContainer, BackgroundImage, Body } from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigation = useNavigate();
  const navigationHandler = () => navigation(route);

  return (
    <DirectiryItemContainer onClick={navigationHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Перейти до магазину</p>
      </Body>
    </DirectiryItemContainer>
  );
};

export default DirectoryItem;
