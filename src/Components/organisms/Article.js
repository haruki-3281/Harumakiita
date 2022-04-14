import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import UserInfo from "../molecules/UserInfo";
import Title from "../atoms/Title";
import TagsContainer from "../molecules/TagsContainer";
import Likes from "../atoms/Likes";

export default function Article(props){
    const data = props.data;
    const [hover,setHover] = useState(false);

    useEffect(()=>{
        console.log( data );
    },[]);

    return (
        <$Article 
            className="article" 
            onMouseOver={()=>setHover(true)} 
            onMouseOut ={()=>setHover(false)}
        >
            <UserInfo 
                user={data.user} 
                timestamp={data.created_at} 
            />
            <Title 
                title={data.title} 
                hover={hover} 
            />
            <TagsContainer tags={data.tags} />
            <Likes likesNum={data.likes_count} />
        </$Article>
    );
};

const $Article = styled.div`
    position:relative;
    width:100%;

    cursor:pointer;
    padding:0.5rem 1.5rem;
    margin-bottom:1rem;
    
    background:white;
    
    box-sizing:border-box;

    > div {
        margin-top:0.5rem;
    }

    p {
        margin:0;
        margin-left:0.5rem;
        font-size:0.85rem;
    }

    @media screen and (max-width:480px){
        padding:0.5rem;
    }
`;