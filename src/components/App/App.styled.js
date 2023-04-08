import styled from "@emotion/styled";
import { AiFillCloseCircle } from "react-icons/ai";

export const AppWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    padding-bottom: 24px;
`;

export const SpinerWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const ErrorWrapper = styled.div`
    padding: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
`;

export const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    border-radius: 50%;
    display: block;
    margin: 10px 10px auto auto;
`;

export const CloseIcon = styled(AiFillCloseCircle)`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: gray;
`;