// 모바일 특화 https://onsen.io/v2/guide/react/index.html#react
// npm install onsenui react-onsenui --save
import { Toast, Page, Toolbar, Button } from "react-onsenui";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import { useState } from "react";
const Onsen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Toolbar>sd</Toolbar>
      <Page style={{ marginTop: "46px" }}>
        page1
        <Button onClick={onClick} modifier="large--cta">
          asd
        </Button>
        <Toast isOpen={isOpen}>www</Toast>
      </Page>
    </>
  );
};

export default Onsen;
