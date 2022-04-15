import React,{ useState,useEffect } from "react";
import styled from "styled-components";

export default function HeaderTitle(props){
    return(
        <$HeaderTitle className={props.className}>
            <a href={props.href}>{props.title}</a>
        </$HeaderTitle>
    );
};

const $HeaderTitle = styled.div`
    position:relative;
    width:fit-content;

    font-family: system-ui;
    font-weight:bold;

    a {
        text-decoration:none;
    }
`;