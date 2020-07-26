import React from 'react';
import { 
  Container,
  Retweeted,
  RetweetIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  LikeIcon,
  Dot,
  RetweetIcon2
 } from './styles';

const Tweet = () => {
  return (
    <Container>
      <Retweeted>
        <RetweetIcon />
        Retweeted from @bar
      </Retweeted>

      <Body>
        <Avatar/>

        <Content>
          <Header>
            <strong>Foo</strong>
            <span>@user</span>
            <Dot/>
            <time> 27 Jul</time>
          </Header>

          <Description> Shazam 🦸</Description>
          <ImageContent />

          <Icons>
            <Status>
                <CommentIcon/>
                18
            </Status>
            <Status>
                <RetweetIcon/>
                18
            </Status>
            <Status>
                <LikeIcon/>
                999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;

