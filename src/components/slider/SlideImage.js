import styled from "styled-components";

const StyledPicture = styled.picture`
    width:100%;
    height:100%;
    background-color:rgb(10,21,67);
    
   img{
        width:100%;
        height:100%;
        position:relative;
        opacity:1;
        transition:opacity 125ms ease-in-out 450ms;
        user-select: none;
        display:block;
    }
    `;

const SlideImage = ({slide}) => {
        return (
            <StyledPicture>
               <source media="(min-width: 1280px )" srcSet={`${slide.url}`} />
               <source media="(min-width: 768px )" srcSet={`${slide.url}`}  />
               <source media="(min-width: 576px )" srcSet={`${slide.url}`}  />
                <img src={`${slide.url}`}  alt=""/>
            </StyledPicture>
        );
    
};

export default SlideImage;
