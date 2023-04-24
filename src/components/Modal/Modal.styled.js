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
    background-color: gray;
`;

export const ModalWindow = styled.div`    
    position: relative;
    top: 30px;
    width: 800px;
    height: 570px;
    border: 1px solid black;
`;