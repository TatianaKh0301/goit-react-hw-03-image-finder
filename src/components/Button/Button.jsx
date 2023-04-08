import React from "react";
import { ButtonLoad } from "./Button.styled";

export const Button = ({onSubmitLoadMore}) => {
    return(
        <ButtonLoad type="button" onClick={onSubmitLoadMore}>Load more</ButtonLoad>
    );
} 