import React from "react";
import { GalleryItem, GalleryItemImage, Wrapper} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({images}) => {
    console.log("images", images);
    
    return(
        <Wrapper>
            {images.map(({id, webformatURL}) => 
                (<GalleryItem key={id}>
                    <GalleryItemImage src={webformatURL} alt="" />
                </GalleryItem>)
            )}
        </Wrapper>  
    );
}