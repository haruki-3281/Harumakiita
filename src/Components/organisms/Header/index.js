import React from "react";
import { $Header, $HeaderItems, $HeaderItemsContainer, $HeaderTitle, $LoginButton, $SearchInput, $SignupButton } from "./style";

export default function Header(props) {
  return (
    <$Header>
      <$HeaderItemsContainer>
        <$HeaderTitle
          title={props.title}
          href="http://localhost:8080"
        />
        <$HeaderItems>
          <$SearchInput />
          <$LoginButton
            href="https://www.yahoo.co.jp"
          />
          <$SignupButton
            href="https://www.yahoo.co.jp"
          />
        </$HeaderItems>
      </$HeaderItemsContainer>
    </$Header>
  );
};
