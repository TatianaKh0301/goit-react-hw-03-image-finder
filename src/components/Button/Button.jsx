import React from "react";
import PropTypes from 'prop-types';

import { ButtonLoad } from "./Button.styled";

export const Button = ({onSubmitLoadMore}) => {
    return(
        <ButtonLoad type="button" onClick={onSubmitLoadMore}>Load more</ButtonLoad>
    );
} 

Button.propTypes = {
    onSubmitLoadMore: PropTypes.func.isRequired,
};