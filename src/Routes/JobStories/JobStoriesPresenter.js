import React from "react";
import DataContainer from "Components/DataContainer";
import { Title } from "Components/CommonStyledComponents";

const JobStoriesPresenter = ({ data }) => {
  return (
    <div>
      <Title>JobStories</Title>
      <DataContainer data={data} />
    </div>
  );
};
export default JobStoriesPresenter;
