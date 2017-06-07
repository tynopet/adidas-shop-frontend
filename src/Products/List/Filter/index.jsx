import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Image,
  GenderWrapper,
  SizeWrapper,
  SizeTitle,
  Button,
} from './styled-components';
import filterIcon from './filter.png';

const Filter = ({ sizes, onClick }) => (
  <Container>
    <Image src={filterIcon} alt="filter" />
    <GenderWrapper>
      <Button type="button" selected isGender>MAN</Button>
      <Button type="button">WOMAN</Button>
    </GenderWrapper>
    <SizeWrapper>
      <SizeTitle>SIZE</SizeTitle>
      <div>
        {Object.entries(sizes).map(([size, isSelected]) => (
          <Button
            type="button"
            key={size}
            onClick={() => onClick(size)}
            isSelected={isSelected}
          >
            {size}
          </Button>
        ))}
      </div>
    </SizeWrapper>
  </Container>
);

Filter.propTypes = {
  sizes: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  filter: null,
};

export default Filter;
