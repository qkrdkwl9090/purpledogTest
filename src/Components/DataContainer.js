import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
const Btn = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgb(242, 242, 242);
  }
`;

const DataContainer = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => {
        return (
          <Link to={`detail/${item}`}>
            <Btn key={index}>{item}</Btn>
          </Link>
        );
      })}
    </Container>
  );
};
export default DataContainer;
