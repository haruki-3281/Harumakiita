import React,{ useState,useEffect } from "react";
import styled from "styled-components";

export default function Title(props){
    return (
        <$Title hover={props.hover}>
            {props.title}
        </$Title>
    );
};

const $Title = styled.h2`
    color:${(hover) => {
        return hover.hover ? "seagreen" : "black"
    } };
    margin-top:4px;
    margin-bottom:4px;
    font-size:1rem;
`;