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

const Filter = ({ sizes, onClick, filter }) => (
  <Container>
    <Image src={filterIcon} alt="filter" />
    <GenderWrapper>
      <Button type="button" selected isGender>MAN</Button>
      <Button type="button">WOMAN</Button>
    </GenderWrapper>
    <SizeWrapper>
      <SizeTitle>SIZE</SizeTitle>
      <div>
        {sizes.map(size => (
          <Button
            type="button"
            key={size}
            onClick={() => onClick(size)}
            isSelected={size === filter}
          >
            {size}
          </Button>
        ))}
      </div>
    </SizeWrapper>
  </Container>
);

Filter.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
