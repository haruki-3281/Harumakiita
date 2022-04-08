import React,{ useState,useEffect } from "react";
import styled from "styled-components";
import PostDay from "../atoms/PostDay";
import UserInfoCore from "../atoms/UserInfoCore";

export default function UserInfo(props){
    const user = props.user;
    const userName = user.github_login_name || user.twitter_screen_name || user.name;

    return (
        <$UserInfo>
            <UserInfoCore 
                profile_image_url={user.profile_image_url}
                userName={userName}
            />
            <PostDay 
                timestamp={props.timestamp}
            />
        </$UserInfo>
    );
};

const $UserInfo = styled.div`
    display:flex;
    align-items:center;

    img {
        width:1.25rem;
        height:1.25rem;
        border-radius:1rem;
    }
`;