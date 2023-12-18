// npm install styled-components
import styled from "styled-components";

const Button = styled.button`
  width: 300px;
  background-color: ${(props) => (props.primary ? "#646482" : "")};
  cursor: pointer;
`;

const TomatoBtn = styled(Button)``;

const StyledComponent = () => {
  return (
    <>
      <Button>클릭</Button>
      <Button primary>클릭</Button>
      <div>
        {/* as -> 태그를 바꿈 */}
        <TomatoBtn as="a" href="#">
          클릭
        </TomatoBtn>
      </div>
    </>
  );
};

export default StyledComponent;
