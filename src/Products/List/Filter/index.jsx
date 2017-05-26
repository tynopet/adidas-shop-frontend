import React from 'react';
import {
  Container,
  Image,
  GenderWrapper,
  SizeWrapper,
  SizeTitle,
  Button,
} from './styled-components';
import filterIcon from './filter.png';

export default () => (
  <Container>
    <Image src={filterIcon} alt="filter" />
    <GenderWrapper>
      <Button type="button" selected isGender>MAN</Button>
      <Button type="button">WOMAN</Button>
    </GenderWrapper>
    <SizeWrapper>
      <SizeTitle>SIZE</SizeTitle>
      <Button type="button">36</Button>
      <Button type="button">37</Button>
      <Button type="button">38</Button>
      <Button type="button">39</Button>
      <Button type="button">40</Button>
      <Button type="button" selected>41</Button>
      <Button type="button">42</Button>
    </SizeWrapper>
  </Container>
);
