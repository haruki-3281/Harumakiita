import React,{ useState,useEffect } from "react";
import styled from "styled-components";

export default function LoginButton(props){
    return(
        <$LoginButton 
            className={props.className}
            href={props.href}
        >
            {"ログイン"}
        </$LoginButton>
    );
};

const $LoginButton = styled.a`
    text-decoration:none;

    :hover{
        text-decoration:underline;
    }
`;