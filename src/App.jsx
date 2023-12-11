import React, { useState } from 'react';
import Button from "./components/button/Button";
import Modal from "./components/modal/Modal";
import Input from "./components/input/Input";
import Space from "./components/space/Space";
import IconButton from "./components/iconbutton/IconButton";
import Tag from "./components/tag/Tag";
import Header from "./components/header/Header";
import Text from "./components/text/Text";
import Table from "./components/table/Table";
import Container from "./components/container/Container";

import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
    console.log("Clicked cancel button");
  };
  // ... rest of your code

  return (
    <>
      <Header action={action} brand={"Yasoo"} width={1300} />
      <Container width={1300}>
      <Space height={"20px"} />
        <Button onClick={showModal} size={"large"}>Open Modal</Button>
        <Modal open={open} onOk={handleOk} onCancel={handleCancel}>
          <Text bold={"true"} size={20}>
            Modal Content
          </Text>
          <Space width={100} height={"10px"} />
          <Text size={20}>your name</Text>
          <Input
            placeholder="Input"
            onChange={(e) => console.log(e.target.value)}
          />
          <Space height={"20px"} />
          <div className="flex">
          <Button type={"primary"} size={"large"}>
            <IconButton icon={"FaceBook"} size={"large"} type={"default"} />
            Click Here
          </Button>
          <Button type={"secondary"} size={"medium"}>
            <IconButton icon={"instagram"} size={"large"} type={"primary"} />
            Click
          </Button>
          <Button type={"default"} size={"small"}>
            <IconButton icon={"folder"} size={"large"} type={"secondary"} />
            Click
          </Button>
          </div>
        </Modal>
        <Table columns={columns} rows={rows} />
      </Container>
    </>
  );
}

export default App;