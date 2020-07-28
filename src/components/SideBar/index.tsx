import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter"/>
        <SearchIcon/>
      </SearchWrapper>

      <Body>
        <List
          title="You might like"
          elements={[
            <FollowSuggestion name="SuperMan" nickname="@clarck"/>,
            <FollowSuggestion name="Naruto" nickname="@dattebayo"/>,
            <FollowSuggestion name="Sasuke" nickname="@uchiha"/>
          ]}/>
        <List
          title="You might like"
          elements={[
            <h1>Test</h1>, 
            <h1>Test</h1>,
            <h1>Test</h1>
          ]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;