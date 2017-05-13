import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import filterIcon from './filter.png';

const FilterWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  font-family: AvenirNextBold;
  font-size: 24px;
  font-weight: normal;
  margin-top: 11px;
  margin-left: 23px;
`;

const FilterImage = styled.img`
  background-color: #ebebeb;
  margin-right: 30px;
  padding: 11px 8px;
`;

const FilterButton = styled.button`
  background-color: transparent;
  border: none;
  font-family: AvenirNextBold;
  font-size: 24px;
  font-weight: normal;
  color: ${props => (props.selected ? '#4d42f8' : '#d6d6d6')};
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #4d42f8;
  }
`;

const GenderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
`;

const SizeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 72px;
  width: 324px;
`;

const SizeTitle = styled.span`
  color: #4d42f8;
  margin-right: 18px;
`;

export default () => (
  <Row>
    <Col lg={12}>
      <FilterWrapper>
        <FilterImage src={filterIcon} alt="filter" />
        <GenderWrapper>
          <FilterButton type="button" selected>MAN</FilterButton>
          <FilterButton type="button">WOMAN</FilterButton>
        </GenderWrapper>
        <SizeWrapper>
          <SizeTitle>SIZE</SizeTitle>
          <FilterButton type="button">36</FilterButton>
          <FilterButton type="button">37</FilterButton>
          <FilterButton type="button">38</FilterButton>
          <FilterButton type="button">39</FilterButton>
          <FilterButton type="button">40</FilterButton>
          <FilterButton type="button" selected>41</FilterButton>
          <FilterButton type="button">42</FilterButton>
        </SizeWrapper>
      </FilterWrapper>
    </Col>
  </Row>
);
