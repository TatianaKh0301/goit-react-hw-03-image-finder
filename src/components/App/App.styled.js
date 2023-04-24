import styled from "@emotion/styled";

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

export const MessageEndGallery = styled.p`
    font-weight: bold;
    height: 65px;
    text-align: center;
    text-transform: uppercase;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;