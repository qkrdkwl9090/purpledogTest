import NewStoriesPresenter from "./NewStoriesPresenter";
import React, { useState, useEffect } from "react";
import { puppleDogApi } from "api";

const NewStoriesContainer = (props) => {
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
  return <NewStoriesPresenter data={state} />;
};
export default NewStoriesContainer;
