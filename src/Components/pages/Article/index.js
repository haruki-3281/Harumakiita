import React, { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import Title from "./Title";
import TagsContainer from "./TagsContainer";
import Likes from "./Likes";
import { $Article } from "./style";

export default function Article(props) {
    const data = props.data;
    const [hover, setHover] = useState(false);

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <$Article
            className="article"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
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
