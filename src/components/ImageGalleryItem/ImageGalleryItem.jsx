import React, { Component } from "react";
import { Modal } from "components/Modal";
import { GalleryItem, GalleryItemImage, Wrapper, OpenImage, CloseButton, CloseIcon} from './ImageGalleryItem.styled';

// export const ImageGalleryItem = ({images,  onClickImage}) => {
//     console.log("imagesItem", images[0].id);
    
    
//     return(
//         <Wrapper>
//             {images.map(({ id, webformatURL }) => 
//                 (<GalleryItem key={id}>
//                     <OpenImage onClick={onClickImage}>
//                         <GalleryItemImage src={webformatURL} alt="ImageGalleryItem" />
//                     </OpenImage>                        
//                 </GalleryItem>)
//             )}
//         </Wrapper>  
//     );
// }
// = ({images,  onClickImage}) =>
export class ImageGalleryItem extends Component  {
    // console.log("imagesItem", images[0].id);
    state = {
        showModal: false,
    };

    openModal = () => {
        this.setState({ showModal: true });
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }
    
    render() {
        const {showModal} = this.state;
        return(
            <Wrapper>
                {this.props.images.map(({ id, webformatURL, largeImageURL, tags }) => 
                    (<GalleryItem key={id}>
                        <OpenImage onClick={this.openModal}>
                            <GalleryItemImage src={webformatURL} alt="ImageGalleryItem" />
                            {showModal && 
                                <Modal onClose = {this.closeModal}>
                                    <CloseButton type="button" onClick ={this.closeModal}><CloseIcon /></CloseButton>
                                    <img src={largeImageURL} alt={tags}/>
                                </Modal>}
                        </OpenImage>                        
                    </GalleryItem>)
                )}
            </Wrapper>  
        );
    }   
}

// onClose = {this.closeModal}