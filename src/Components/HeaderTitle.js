import React,{ useState,useEffect } from "react";
import styled from "styled-components";

export default function HeaderTitle(props){
    return(
        <$HeaderTitle>
            <p>{props.title}</p>
            <a href="http://localhost:8080"></a>
        </$HeaderTitle>
    );
};

const $HeaderTitle = styled.div`
    position:relative;
    color:white;
    
    width:fit-content;

    p{
        margin:0;
        font-family: system-ui;
        font-weight:bold;
        font-size:1.5rem;
    }

    > a {
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
`;