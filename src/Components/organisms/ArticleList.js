import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import Article from "./Article";

const api = "dummy.json";

export default function ArticleList(){
    const [list,setList] = useState([]);

    useEffect(()=>{
        fetch(api,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then( res => res.json() )
        .then( data => setList( data ) );
    },[]);

    return (
        <$ArticleList>
            {list.map((item,index) => {
                return <Article key={index} data={item}/>;
            })}
        </$ArticleList>
    );
};

const $ArticleList = styled.div`
    position:relative;

    width:100%;
    grid-column: 2;

    display:flex;
    flex-direction:column;
`;