import React from 'react';
import styled from 'styled-components';

interface Props {
  weekName: string;
}

const Container = styled.div`
  background-color: gray;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WeekBox = ({ weekName }: Props) => {
  return (
    <Container>
      <p>{weekName}</p>
    </Container>
  );
};

export default WeekBox;
