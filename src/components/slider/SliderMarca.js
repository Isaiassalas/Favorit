
import styled from "styled-components";
import { useState } from 'react';
import Tran from './tran';
import Controls from './Controls';
import SlideImage from './SlideImage';
import Mobile from "./Mobile";




const Wrapper = styled.div `
    width:100%;
    overflow: hidden;
    position: relative;
    padding:20px 0px;
    ul{
        display: flex;
        position:relative;
        margin:40px 0px;
        padding: 0px;
        list-style:none;
        transform: translate3d(${(100 - 18) / 2}vw, 0,0);
        @media (max-width: 760px){
            display:block;
            transform: none;
            margin-left: auto;
            margin-right: auto;
        }
    }
    li{
        
        min-width:38vw;
        max-width:38vw;
        padding: 5px 10px;
        transform: scale(0.86) translate(-28%, -3%);
        opacity:0.3;
        &.activo{
            transform: scale(1.1) translate(-25%, -5%);
            opacity:1;
        }
        @media (max-width: 760px){
            min-width:70vw;
            max-width:70vw;
            opacity:1;
            display:${p => p.mobileExpand ? 'block' : 'none' };
            &:nth-child(1) {
                display:block;
            }
            margin-left: auto;
            margin-right: auto;
            transform: scale(1.1) translate(-0%, -2%);
            opacity:1;
            padding:40px 0 ;
            &.activo{
                transform: scale(1.1) translate(-0%, -2%);
                
            }
            
        }
        
    }

`;
const StyledDiv = styled.div`
    width:100%;
    height:100%;
    background-color:rgb(10,21,67);
    @media (max-width: 760px){
        height:60%; 
       
    }
`;




        
const Slider = ({slides, slide })=> {
    const [SlideIndex, setSlideIndex]= useState(0);
    const [mobileExpand, setMobileExpand]= useState(0);

    const onPrev = () => {
        if (SlideIndex > 0) {
            setSlideIndex (prevIndex => prevIndex - 1);
        } else {
            setSlideIndex(slides.length - 1);
        }
    }

    const onNext= () => {


        if (SlideIndex < slides.length - 1) {
            setSlideIndex (prevIndex => prevIndex + 1);
        } else {
            setSlideIndex(0);
        }

    } 
    
    

        return (
            <div >
                <div className='col-md-8 col-md-offset-2 title-marca text-center'>  
                    <h2>Categorías de Productos a ofrece</h2> <br />
                </div>
            <Wrapper mobileExpand={mobileExpand} >
                <div className='slider'>
                    <Tran {...{SlideIndex}} slideWidth={38}>
                        <ul>

                            
                            {slides.map((slide, i) => (

                                
                                <li id={"items-"+slide.id} key={i} className={i === SlideIndex ? 'activo': '' } >
                                   
                                <StyledDiv >  

                                    <SlideImage slide={slide}/>

                                </StyledDiv>  
                                       
                                </li>
                                
                            ))}
                            
                           
                        </ul>
                    </Tran>
                    <Controls slideWidth={43} prev={onPrev} next={onNext}/>
                </div>
                <Mobile {...{mobileExpand, setMobileExpand}} totalSlides={slides.length}/>
            </Wrapper>
            </div>
        );
    }
    

export default Slider;


