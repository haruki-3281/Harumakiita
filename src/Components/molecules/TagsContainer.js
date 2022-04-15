import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import Tag from "../atoms/Tag";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TagsContainer(props){
    const tagLength = props.tags.length;
    const tags = props.tags.map((data,index)=>{
        return (
            <Tag key={index} tagName={data.name} last={tagLength == (index + 1)} />
        );
    });

    return (
        <$TagsContainer>
            <FontAwesomeIcon icon={faTags} />
            {tags}
        </$TagsContainer>
    );
};

const $TagsContainer = styled.div`
    display:flex;
    align-items:center;
`;