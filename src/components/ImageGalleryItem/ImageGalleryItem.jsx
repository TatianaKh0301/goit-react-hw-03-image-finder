import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Modal } from "components/Modal";
import { GalleryItem, GalleryItemImage, Wrapper, CloseButton, CloseIcon, LargeImage } from './ImageGalleryItem.styled';
export class ImageGalleryItem extends Component  {
    state = {
        showModal: false,
        activeImageIndex: 0,
    };

    openModal = () => {
        this.setState({ showModal: true });
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }
    
    setActiveImageIndex = index => {
        this.setState({ activeImageIndex: index});
    };
    
    render() {
        const {showModal, activeImageIndex} = this.state;
        const { images } = this.props;
        const activeImage = images[activeImageIndex];
        return(
            <Wrapper>
                {images.map(({ id, webformatURL, largeImageURL, tags }, index) => 
                    
                    (<GalleryItem key={id} 
                        onClick = {() => 
                        this.setActiveImageIndex(index)}>
                            <GalleryItemImage src={webformatURL} alt="ImageGalleryItem" onClick={this.openModal} />
                            {showModal && 
                                <Modal onClose = {this.closeModal}>
                                    <CloseButton type="button" onClick ={this.closeModal}><CloseIcon /></CloseButton>
                                    <LargeImage src={activeImage.largeImageURL} alt={activeImage.tags}/>
                                </Modal>}
                    </GalleryItem>)
                )}
            </Wrapper>  
        );
    }   
}

ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
};