import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Likes(props){
    return (
        <$Likes>
            <FontAwesomeIcon icon={faThumbsUp}/>
            <p>{props.likesNum}</p>
        </$Likes>
    );
};

const $Likes = styled.div`
    display:flex;
    align-items:center;
`;
