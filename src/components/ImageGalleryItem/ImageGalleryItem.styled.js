import styled from "@emotion/styled";
import { AiFillCloseCircle } from "react-icons/ai";

export const GalleryItem = styled.li`
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const GalleryItemImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: scale(1.03);
        cursor: zoom-in;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
`;

export const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0;
    border: none;
    border-radius: 50%;
    margin: 10px 10px auto auto;
    position: absolute;
    left: 750px;
`;

export const CloseIcon = styled(AiFillCloseCircle)`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: gray;
`;

export const LargeImage = styled.img`
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;