import ShowStoriesPresenter from "./ShowStoriesPresenter";
import React, { useState, useEffect } from "react";
import { puppleDogApi } from "api";

const ShowStoriesContainer = (props) => {
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
  return <ShowStoriesPresenter data={state} />;
};
export default ShowStoriesContainer;
