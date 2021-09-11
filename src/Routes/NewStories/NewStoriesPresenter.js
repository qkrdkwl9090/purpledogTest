import { Title } from "Components/CommonStyledComponents";
import DataContainer from "Components/DataContainer";

const NewStoriesPresenter = ({ data }) => {
  return (
    <div>
      <Title>JobStories</Title>
      <DataContainer data={data} />
    </div>
  );
};
export default NewStoriesPresenter;
