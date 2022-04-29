import { useEffect } from "react";
import styled from "styled-components";
import Chevron from "./Chevron";


const StyledDiv= styled.div`
    width:100%;
    height:100%;
    position:absolute;
    top: 0px;
    display:flex;
    justify-content: space-between;
    aling-items: center;
    pointer-events:none;
    z-index:10;
    opacity:1;
    @media (max-width: 760px){
        display: none;
    }

    button{
        position: relative;
        pointer-events:auto;
        padding:5px;
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0);
        border:0;
        &:nth-child(1) {
            transform: rotate(180deg);
            left: calc(${p => (100 - p.slideWidth) / 2}vw - 35px);
            }
        &:nth-child(2) {
            right: calc(${p => (100 - p.slideWidth) / 2}vw - 35px);
           
        }
        

        
        div{
            width:50px ;
            height:50px;
            
            position:relative;
            border:1px solid rgb(239,180,34);
            background-color:rgb(8,16, 48);
            color:white;
            border-radius:4px;
            opacity:0;  
            transition:opacity 200ms ease 0s, background-color 200ms ease 0s;
            &:hover{
                background: rgb(239, 180, 34);
                color:black;   
                }
            span{
                
                display:block;
                line-height:0;
                width:20px;
                height:20px;
                color:currentcolor;
                margin:15px;
                
            }
        }
       
    }
    div.slider:hover &{
        button{
            div{
                opacity:1;
            }
        }
    }

`;

const Controls =(props)=> {

    const onKeyDown = (e) => {
        if (e.key === "ArrowLeft" ) props.prev();
        if (e.key === "ArrowRight" ) props.next();
    }

    useEffect(() =>{
        window.addEventListener('keydown', onKeyDown);
        return () => {
        window.removeEventListener('keydown', onKeyDown);
        }
    })
return (
            <StyledDiv {...props}>
                <button onClick={props.prev}>
                    <div>
                        <span>
                            <Chevron/>
                        </span>
                    </div>
                </button>
                <button onClick={props.next}>
                    <div>
                        <span>
                            <Chevron/>
                        </span>
                    </div>
                </button>
            </StyledDiv>
);
}


export default Controls;
