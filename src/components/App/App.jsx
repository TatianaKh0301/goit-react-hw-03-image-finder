import React, {Component} from "react";
import { ToastContainer} from 'react-toastify';
import { SearchBar } from "components/SearchBar";
import { Loader } from "components/Loader";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button";
import { AppWrapper, ErrorWrapper, MessageEndGallery } from "./App.styled";


const APIkey = '30028288-057bf7cd6d2ddc6419712f1dc';
const perPage = 12;

export class App extends Component {
    state = {
        imagesTitle: '',
        hits: null,
        totalHits: null,
        isLoader: false,
        error: null,
        page: 0,
        moreImages: false,
    };

    componentDidUpdate(prevProps, prevState) {    
        const requestValue=this.state.imagesTitle;

        const { page } = this.state;
    
        if (prevState.imagesTitle !== this.state.imagesTitle || prevState.page !== this.state.page) {
            if (page === 1) {
                this.setState({isLoader: true, hits: null});
            }
            
            fetch(`https://pixabay.com/api/?q=${requestValue}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
                .then(response => response.json())       
                .then(data => {
                    console.log("data", data);
                    
                    if (data.hits.length === 0) { 
                        return Promise.reject(new Error(`There are no images "${ requestValue }"`)) 
                    }
                    if (this.state.hits === null) {
                        return this.setState({hits: data.hits, totalHits: data.totalHits, moreImages: (Math.ceil(data.totalHits / perPage)) > page });
                    }
                    this.setState(prevState => {return { hits: [...prevState.hits, ...data.hits ]}});
                    this.setState({moreImages: (Math.ceil(data.totalHits / perPage)) > page});
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

    render() {
        const { hits, isLoader,  error, moreImages } = this.state;
        // console.log("hits", hits);
         
        return (
            <AppWrapper>        
                <SearchBar onSubmit={this.handleFormSubmit}/>
                {error && <ErrorWrapper>{error.message}</ErrorWrapper>}       
                {isLoader && <Loader />}
                {hits &&
                    <>
                        <ImageGallery imagesFind={hits} />                     
                        { moreImages ? <Button onSubmitLoadMore={this.handleButtonLoadMore}/> : <MessageEndGallery>There are no more images</MessageEndGallery>}
                    </>             
                }   
                <ToastContainer/>
            </AppWrapper>
        );
    }  
};