import React from 'react';

import { 
  Container,
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton 
} from './styles';
import Feed from '../Feed';

const ProfilePage = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>

      <ProfileData>
        <EditButton outlined >Edit profile</EditButton>

        <h1>Eliel Silva</h1>
        <h2>@elielodeveloper</h2>

        <p>
          Tech consultant at <a href="#">@ Oracle</a>
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Rio de Janeiro, RJ
          </li>
          <li>
            <CakeIcon/>
            Born in 24 of October 2020
          </li>
        </ul>
        <Followage>
          <span>
            following <strong>90</strong>
          </span>
          <span>
            <strong>100 </strong> followers
          </span>
        </Followage>
      </ProfileData>

      <Feed/>

    </Container>
  )
};

export default ProfilePage;