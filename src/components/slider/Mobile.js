import styled from "styled-components";

const StyledButton= styled.button`
    width: calc(40% - 30px);
    margin:10px auto;
    background-color: (201, 201, 201);
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
    color:#000;
    padding:15px 0;
    fon-size:16px;
    font-weight:bold;
    cursor:pointer;
    display:none;
    @media (max-width: 760px){
        display: block;
    }

`;

const Mobile =({mobileExpand, setMobileExpand, totalSlides}) => {
    return(
        <StyledButton onClick={()=> setMobileExpand((mobileExpand)=> Number(!mobileExpand))}>
            {mobileExpand ? "VER MENOS": `VER [${totalSlides - 1}] MAS`}

        </StyledButton>
    );
};
export default Mobile;