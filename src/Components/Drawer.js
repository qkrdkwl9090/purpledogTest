import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Drawer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: start;
  background: white;
  border-right: 1px solid lightgray;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;
`;
const Item = styled.div`
  margin: 0 20px;
  display: flex;
  height: 50px;
  text-align: center;
  align-items: center;
  border-radius: 8px;
  color: ${(props) => (props.current ? "rgb(0, 49, 113)" : "grey")};
  background: ${(props) =>
    props.current ? "rgb(243,245,249)" : "transparent"};
  font-weight: bold;
  font-size: 16px;
  transition: 0.3s ease-in-out;
`;
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export default withRouter(({ location: { pathname } }) => {
  const Category = [
    "topstories",
    "newstories",
    "askstories",
    "showstories",
    "jobstories",
  ];
  return (
    <Drawer>
      <List>
        {Category &&
          Category.map((item, index) => {
            return (
              <Item key={index} current={pathname === `/${item}`}>
                <SLink to={`/${item}`}>{item}</SLink>
              </Item>
            );
          })}
      </List>
    </Drawer>
  );
});
