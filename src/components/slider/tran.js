import styled from "styled-components";

const StyledTran= styled.div`
    transition: transform 300ms cubic-bezier(0.42, 0, 0.58, 1) 0.2s;
    transform: translate3d(${(p)=> p.slideWidth * -p.SlideIndex}vw, 0, 0);
`;

const Tran = (props) => {
    return <StyledTran {...props}>{props.children}</StyledTran>;

};

export default Tran;
