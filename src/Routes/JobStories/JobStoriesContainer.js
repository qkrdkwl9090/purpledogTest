import React, { useState, useEffect } from "react";
import { puppleDogApi } from "api";
import JobStoriesPresenter from "./JobStoriesPresenter";

const JobStoriesContainer = (props) => {
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
  return <JobStoriesPresenter data={state} />;
};
export default JobStoriesContainer;
