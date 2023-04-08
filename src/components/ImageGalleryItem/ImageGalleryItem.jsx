import React from "react";
import { GalleryItem, GalleryItemImage, Wrapper, OpenImage} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({images,  onClickImage}) => {
    console.log("imagesItem", images[0].id);
    
    
    return(
        <Wrapper>
            {images.map(({ id, webformatURL }) => 
                (<GalleryItem key={id}>
                    <OpenImage onClick={onClickImage}>
                        <GalleryItemImage src={webformatURL} alt="ImageGalleryItem" />
                    </OpenImage>                        
                </GalleryItem>)
            )}
        </Wrapper>  
    );
}