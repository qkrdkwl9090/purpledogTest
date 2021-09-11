import AskStoriesPresenter from "./AskStoriesPresenter";
import React, { useState, useEffect } from "react";
import { puppleDogApi } from "api";

const AskStoriesContainer = (props) => {
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
  return <AskStoriesPresenter data={state} />;
};
export default AskStoriesContainer;
