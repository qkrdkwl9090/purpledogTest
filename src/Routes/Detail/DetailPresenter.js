import styled from "styled-components";
const Container = styled.div`
  padding: 100px 50px;
`;
const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;
const Sub = styled.p`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: grey;
`;
const H3 = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;
const DetailPresenter = ({ data }) => {
  const { by, id, score, text, time: timeStamp, url, title, type } = data;
  let cTime = new Date(timeStamp * 1000);
  var year = cTime.getFullYear().toString().slice(-2);
  var month = ("0" + (cTime.getMonth() + 1)).slice(-2);
  var day = ("0" + cTime.getDate()).slice(-2);
  return (
    <Container>
      <Title>{title}</Title>
      <H3>ID : {id}</H3>
      <H3>Score : {score}</H3>
      <H3>Type : {type}</H3>
      <H3>
        Date : {year}-{month}-{day}
      </H3>
      <H3>By : {by}</H3>
      {url && (
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      )}
      {text && (
        <Sub
          id="sub"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        ></Sub>
      )}
    </Container>
  );
};
export default DetailPresenter;
