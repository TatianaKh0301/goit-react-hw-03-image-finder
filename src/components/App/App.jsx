import React, {Component} from "react";
import { ToastContainer } from 'react-toastify';
import { SearchBar } from "../SearchBar";
import { Button } from "../Button";
import {AppWrapper } from "./App.styled";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { RotatingLines } from  'react-loader-spinner';

const APIkey = '30028288-057bf7cd6d2ddc6419712f1dc';

export class App extends Component {
  state = {
    imagesTitle: '',
    images: null,
    isLoader: false,
  };


  componentDidUpdate(prevProps, prevState) {
    const requestValue=this.state.imagesTitle;
    const page = 1;
    if (prevState.imagesTitle !== this.state.imagesTitle) {
      this.setState({isLoader: true});
      setTimeout(() => {
        fetch(`https://pixabay.com/api/?q=${requestValue}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => response.json())
      .then(data => this.setState({images: data}));
      this.setState({isLoader: false});
      }, 5000);
      
    }
    
  }

  handleFormSubmit = imagesTitle => {
    this.setState({ imagesTitle });
  };

  render() {
    return (
      <AppWrapper>
        <ToastContainer/>
        <SearchBar onSubmit={this.handleFormSubmit}/>
        {/* {this.state.isLoader && <Loader />} */}
        {this.state.isLoader && <RotatingLines 
                                    strokeColor="lightblue"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="96"
                                    visible={true}
                                />
        }
        {this.state.images && <ImageGallery imagesFind={this.state.images.hits}/> }
        <Button />
      </AppWrapper>
    );
  }  
};
