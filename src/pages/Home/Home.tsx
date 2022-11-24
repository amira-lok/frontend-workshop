import React, {useState} from 'react';
import {Heading, Heading2, Container} from './styles'
import {SomeProgressBar} from './components/SomeProgressBar/SomeProgressBar'
import {Button, showToast, Flex} from "@lokalise/louis";

const Home = () => {
 

  return (
    <Container>
      <SomeProgressBar></SomeProgressBar>
    </Container>
  );
};

export default Home;
