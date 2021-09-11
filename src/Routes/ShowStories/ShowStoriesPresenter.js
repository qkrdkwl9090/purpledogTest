import { Title } from "Components/CommonStyledComponents";
import DataContainer from "Components/DataContainer";

const ShowStoriesPresenter = ({ data }) => {
  return (
    <div>
      <Title>ShowStories</Title>
      <DataContainer data={data} />
    </div>
  );
};
export default ShowStoriesPresenter;
