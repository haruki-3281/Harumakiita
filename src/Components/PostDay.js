import React,{ useState,useEffect } from "react";
import styled from "styled-components";

export default function PostDay(props){
    const pattern = /([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/;
    const timestamp = props.timestamp;
    const match = timestamp.match( pattern );

    return(
        <$PostDay>
            {`が${match[1]}年${match[2]}月${match[3]}日に投稿`}
        </$PostDay>
    );
};

const $PostDay = styled.p`
    color:rgba(0,0,0,0.6);
`;