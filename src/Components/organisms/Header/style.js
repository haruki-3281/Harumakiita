import styled from "styled-components";
import HeaderTitle from "../../atoms/HeaderTitle";
import SearchInput from "../../atoms/SearchInput";
import LoginButton from "../../atoms/LoginButton";
import SignupButton from "../../atoms/SignupButton";

export const $HeaderTitle = styled(HeaderTitle)`
    font-size:2rem;
    a {
        color:white;
    }
`;

export const $SearchInput = styled(SearchInput)`
    width: 20rem;
    height: 2.5rem;

    .searchIcon {
        font-size:0.75rem;
        height:fit-content;
        left:0.75rem;
    }
`;

export const $LoginButton = styled(LoginButton)`
    color:white;
`;

export const $SignupButton = styled(SignupButton)`
    padding:0.5rem;
    color:white;
`;

export const $Header = styled.div`
    position:relative;
    height:fit-conetnt;
    padding-top:0.5rem;
    grid-row: 1;

    display:flex;
    justify-content:center;

    background:#8858FF;
`;

export const $HeaderItemsContainer = styled.div`
    display:flex;

    align-items:center;
    justify-content:space-between;

    width:95%;
    height:fit-content;
`;

export const $HeaderItems = styled.div`
    display:flex;
    align-items:center;

    > * {
        margin-right:1rem;
    }

    > a {
        font-size:0.9rem;
        font-weight:bold;
    }
`;