import styled from "styled-components";

const StyledSvg = styled.svg`
    width:100%;
    height:100%;
    pointer-events:none;
`;

function Chevron() {
    
    return (
        <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 9">

            <path 
                stroke="currentColor"
                d="M1 1l3 3.5L1 8"
                fill="none"
                fillRule="evenodd"
            />    
            
        </StyledSvg>

    );
}

export default Chevron;
