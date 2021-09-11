import { Title } from "Components/CommonStyledComponents";
import DataContainer from "Components/DataContainer";

const AskStoriesPresenter = ({ data }) => {
  return (
    <div>
      <Title>AskStories</Title>
      <DataContainer data={data} />
    </div>
  );
};
export default AskStoriesPresenter;
