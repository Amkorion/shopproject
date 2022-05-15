import React from "react";
import { DirectiryItemContainer, BackgroundImage, Body } from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectiryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Перейти до магазину</p>
      </Body>
    </DirectiryItemContainer>
  );
};

export default DirectoryItem;
