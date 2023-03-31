import React, {Component} from "react";
import { ToastContainer} from 'react-toastify';
import { RotatingLines } from  'react-loader-spinner';

import { SearchBar } from "../SearchBar";
import { Loader } from "components/Loader";
import { Button } from "../Button";
import {AppWrapper, SpinerWrapper } from "./App.styled";
import { ImageGallery } from "components/ImageGallery/ImageGallery";


const APIkey = '30028288-057bf7cd6d2ddc6419712f1dc';

export class App extends Component {
  state = {
    imagesTitle: '',
    images: null,
    isLoader: false,
    error: null,
  };


  componentDidUpdate(prevProps, prevState) {
    const requestValue=this.state.imagesTitle;
    const page = 1;

    if (prevState.imagesTitle !== this.state.imagesTitle) {
      this.setState({isLoader: true, images: null});
      setTimeout(() => {
        fetch(`https://pixabay.com/api/?q=${requestValue}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => response.json())       
      .then(data => {
        if (data.hits.length === 0) { return Promise.reject(new Error(`There are no images ${ requestValue }`)) }
        this.setState({images: data})
      }) 
      .catch(error => this.setState({ error }))
      .finally (() => this.setState({isLoader: false}));
      }, 5000);
      
    }
    
  }

  handleFormSubmit = imagesTitle => {
    this.setState({ imagesTitle });
  };

  render() {
    const { images, isLoader,  error } = this.state;
    console.log("error", error);
    return (
      <AppWrapper>        
        <SearchBar onSubmit={this.handleFormSubmit}/>
        {error && <div>{error.message}</div>}       
        <Loader />
        {/* {this.state.isLoader && <Loader />} */}
        {isLoader && <SpinerWrapper>
                          <RotatingLines 
                              strokeColor="lightblue"
                              strokeWidth="1"
                              nimationDuration="0.75"
                              width="96"
                              visible={true}
                          />
                      </SpinerWrapper>
        
        }
        {images && <ImageGallery imagesFind={images.hits}/> }
        <Button />
        <ToastContainer/>
      </AppWrapper>
    );
  }  
};
