import styled from "@emotion/styled";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
`;

export const ModalWindow = styled.div`
    background-color: green;
    width: 1000px;
    height: 500px;
    /* max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px); */
`;

export const CloseButton = styled.button`
    width: 40px;
    height: 40px;
    display: block;
    margin: 10px 10px auto auto;
`;