import React, { Component } from "react";
import PropTypes from 'prop-types';
import {BsSearch} from "react-icons/bs";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./SearchBar.styled";

export class SearchBar extends Component {
    state = {
        imagesTitle: '',
    };

    handleTitleChange = event => {
        this.setState({imagesTitle: event.currentTarget.value.toLowerCase()});
    };

    handleSubmit = event => {
        event.preventDefault();
        
        if(this.state.imagesTitle.trim() ==='') {
            toast.error('Please, write a value!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                return;
        }

        this.props.onSubmit(this.state.imagesTitle);
        this.setState({imagesTitle: ''});
    };

    render() {
        return(
            <SearchbarHeader>                
                <SearchForm onSubmit={this.handleSubmit}>
                    < SearchFormButton type="submit">
                        <BsSearch size="25"/>
                        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                    </ SearchFormButton>
    
                    <SearchFormInput
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.imagesTitle}
                        onChange={this.handleTitleChange}
                    />
                </SearchForm>
            </SearchbarHeader>);
    }  
}

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};