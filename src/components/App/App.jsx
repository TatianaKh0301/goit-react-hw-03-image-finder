import React, {Component} from "react";
import { ToastContainer} from 'react-toastify';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { SearchBar } from "components/SearchBar";
import { Loader } from "components/Loader";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Modal } from "components/Modal";
import { Button } from "components/Button";
import { AppWrapper, ErrorWrapper, CloseButton, CloseIcon } from "./App.styled";


const APIkey = '30028288-057bf7cd6d2ddc6419712f1dc';

export class App extends Component {
    state = {
        imagesTitle: '',
        images: null,
        hits: null,
        isLoader: false,
        error: null,
        page: 0,
        perPage: 12, 
        showModal: false,
        largeImage: '',
        activeImageIndex: 0,
    };

    componentDidMount(){
        console.log("ComponentDidMount");
    };

    componentDidUpdate(prevProps, prevState) {
        console.log("COMPONENTDIDUPDATE");
        const requestValue=this.state.imagesTitle;

        const { page, perPage } = this.state;
        // if (page === 1) {
        //     this.setState({images: null});
        // }

        if (prevState.imagesTitle !== this.state.imagesTitle || prevState.page !== this.state.page) {
            if (page === 1) {
                this.setState({isLoader: true, images: null, hits: null});
            }
            
            fetch(`https://pixabay.com/api/?q=${requestValue}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
                .then(response => response.json())       
                .then(data => {
                    console.log("data", data);
                    if (data.hits.length === 0) { 
                        return Promise.reject(new Error(`There are no images "${ requestValue }"`)) 
                    }
                    if (this.state.hits === null) {
                        return this.setState({hits: data.hits, images: data });
                    }
                    this.setState(prevState => {return { hits: [...prevState.hits, ...data.hits ]}});
                }) 
                .catch(error => this.setState({ error }))
                .finally (() => this.setState({isLoader: false}));  
        }    
    }
   
    handleFormSubmit = imagesTitle => {
        this.setState({ imagesTitle, error: null, page: 1 });
    };

    handleButtonLoadMore = () => {
        this.setState((prevState => {
            return {
                page: prevState.page + 1,
            };
        }));
    };

    openModal = () => {
        this.setState({ showModal: true });
    }

    closeModal = () => {
        this.setState({ showModal: false });
    }
    
    render() {
        const { hits, isLoader,  error, showModal } = this.state;
        console.log("hits", hits);
       
        return (
            <AppWrapper>        
                <SearchBar onSubmit={this.handleFormSubmit}/>
                {error && <ErrorWrapper>{error.message}</ErrorWrapper>}       
                {isLoader && <Loader />}
                {hits &&
                    <>
                        <ImageGallery imagesFind={hits} onClickImage={this.openModal}/>
                        
                        {showModal && 
                        <Modal onClose = {this.closeModal}>
                            <CloseButton type="button" onClick={this.closeModal}><CloseIcon /></CloseButton>
                        </Modal>}
                        <Button onSubmitLoadMore={this.handleButtonLoadMore}/>
                    </>             
                }      
                {showModal ? disableBodyScroll(document) : enableBodyScroll(document)}  
                <ToastContainer/>
            </AppWrapper>
        );
    }  
};