import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import UserIcon from "./UserIcon";

export default function UserInfoCore(props){
    const [hover,setHover] = useState(false);

    return (
        <$UserInfoCore
            hover={hover}
            onMouseOver={()=>setHover(true)}
            onMouseOut ={()=>setHover(false)}
        >
            <UserIcon 
                profile_image_url={props.profile_image_url}
                hover={hover}
            />
            <p className="userName">@{props.userName}</p>
        </$UserInfoCore>
    );
};

const $UserInfoCore = styled.div`
    position:relative;

    .userName {
        text-decoration:${(hover)=>hover.hover ? "underline" : "none"}
    }

    display:flex;
    align-items:center;
`;

