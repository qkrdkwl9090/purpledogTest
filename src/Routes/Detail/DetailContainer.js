import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { puppleDogApi } from "api";

const DetailContainer = (props) => {
  const [state, setState] = useState([]);
  const {
    match: {
      params: { id },
    },
  } = props;
  const parseId = parseInt(id);
  useEffect(() => {
    async function getData() {
      const { data } = await puppleDogApi.getDetailById(parseId);
      setState(data);
    }
    getData();
  }, [parseId]);
  return <DetailPresenter data={state} />;
};
export default DetailContainer;
