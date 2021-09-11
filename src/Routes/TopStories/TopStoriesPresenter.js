import { Title } from "Components/CommonStyledComponents";
import DataContainer from "Components/DataContainer";

const TopStoriesPresenter = ({ data }) => {
  return (
    <div>
      <Title>TopStories</Title>
      <DataContainer data={data} />
    </div>
  );
};
export default TopStoriesPresenter;
