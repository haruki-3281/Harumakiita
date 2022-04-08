import React,{ useState,useEffect } from "react";
import styled from "styled-components";

let $Title = styled.h2`
    color:${(hover) => {
        return hover.hover ? "seagreen" : "black"
    } };
    margin-top:4px;
    margin-bottom:4px;
    font-size:1rem;
`;

export default function Title(props){
    return (
        <$Title hover={props.hover}>
            {props.title}
        </$Title>
    );
};