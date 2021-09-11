import TopStoriesPresenter from "./TopStoriesPresenter";
import React, { useState, useEffect } from "react";
import { puppleDogApi } from "api";

const TopStoriesContainer = (props) => {
  const [state, setState] = useState([]);
  const {
    location: { pathname },
  } = props;

  useEffect(() => {
    async function getData() {
      const { data } = await puppleDogApi.getList(pathname);
      setState(data);
    }
    getData();
  }, [pathname]);
  return <TopStoriesPresenter data={state} />;
};
export default TopStoriesContainer;
