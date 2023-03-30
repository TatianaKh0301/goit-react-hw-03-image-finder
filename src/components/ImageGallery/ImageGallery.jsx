import React from "react";
import { ImageGalleryItem } from '../ImageGalleryItem';
import { ImageGalleryList } from "./ImageGallery.styled";

export const ImageGallery = ({imagesFind}) => {
    return(
        <ImageGalleryList>
            <ImageGalleryItem images={imagesFind}/>
        </ImageGalleryList>);
}