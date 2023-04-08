import { RotatingLines } from  'react-loader-spinner';
import { LoaderMainWrapper, LoaderWrapper } from './Loader.styled';

export const Loader = () => {
    return(
        <LoaderMainWrapper>
            <LoaderWrapper>
                < RotatingLines
                    strokeColor="lightblue"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </LoaderWrapper>            
        </LoaderMainWrapper>
    );
}