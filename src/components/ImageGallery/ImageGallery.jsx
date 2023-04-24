import React from "react";
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem';
import { ImageGalleryList } from "./ImageGallery.styled";

export const ImageGallery = ({imagesFind, onClickImage}) => {
    return(
        <ImageGalleryList>
            <ImageGalleryItem images={imagesFind} onClickImage={onClickImage}/>
        </ImageGalleryList>);
}

ImageGallery.propTypes = {
    imagesFind: PropTypes.array.isRequired,
    onClickImage: PropTypes.func,
};