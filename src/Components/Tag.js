import React,{ useState,useEffect } from "react";
import styled from "styled-components";

export default function Tag(props){
    const [hover,setHover] = useState(false);

    const handleHover = function(){
        setHover( true );    
    };

    const handleHoverOut = function(){
        setHover( false );
    };

    return(
        <$Tag 
            hover={hover}
            onMouseOver={()=>setHover(true)}
            onMouseOut ={()=>setHover(false)}
        >
            {props.tagName}
            {!props.last && ","}
        </$Tag>
    );
};

const $Tag = styled.p`
    text-decoration: ${(hover)=>{
        return hover.hover ? "underline" : "none";
    }}
`;