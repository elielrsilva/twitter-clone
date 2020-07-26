import React from 'react'

import { 
  Container,
  Header, 
  BackIcon, 
  ProfileInfo, 
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon
} from './styles';

import ProfilePage from '../ProfilePage';


const Main = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon/>
        </button>

        <ProfileInfo>
          <strong>Eliel Silva</strong>
          <span>612 Tweets</span>
        </ProfileInfo>

        
      </Header>
      <ProfilePage/>

      <BottomMenu>
          <HomeIcon/>
          <SearchIcon/>
          <BellIcon/>
          <EmailIcon/>
        </BottomMenu>
    </Container>
  )
}

export default Main;