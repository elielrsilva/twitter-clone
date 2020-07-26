import React from 'react'

import Button from '../Button';

import {
  Container,
  Topside,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Logo,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon
} from './style';

const MenuBar = () => {
  return (
    <Container>
      <Topside>
        <Logo/>
        <MenuButton>
            <HomeIcon />
            <span>Home</span>
        </MenuButton>
        <MenuButton>
            <BellIcon />
            <span>Notifications</span>
        </MenuButton>
        <MenuButton>
            <EmailIcon />
            <span>Messages</span>
        </MenuButton>
        <MenuButton>
            <FavoriteIcon />
            <span>Favorites</span>
        </MenuButton>
        <MenuButton className="active">
            <ProfileIcon />
            <span>Profile</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>

      </Topside>
      <Botside>
        <Avatar/>
        <ProfileData>
          <strong>Eliel Silva</strong>
          <span>@elielodeveloper</span>
        </ProfileData>
        <ExitIcon/>
      </Botside>
    </Container>
  )
};

export default MenuBar;
