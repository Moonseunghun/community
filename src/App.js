import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Ckeditor from "./Ckeditor";

const App = () => {
  const [comment, setComment] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [change, setChange] = useState(false);
  const [changeTwo, setChangeTwo] = useState(false);
  const [community, setCommunity] = useState(false);

  const onClick = () => {
    setChange(!change);
  };

  const onChange = () => {
    setCommunity(!community);
  };

  const getIsOPen = () => {
    setIsOpen(true);
  };
  return (
    <BigBox>
      <BigSmallBox>
        <SmallBox>
          게시판
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            체크 리스트
          </button>
          <button />
          {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
        </SmallBox>
        <Toggle>
          <SmallListBox>
            <ListBox>123</ListBox>
            <ListBox3>123</ListBox3>
            {/* <ListBox2>123</ListBox2> */}
          </SmallListBox>
        </Toggle>

        {/* <MoreMin>123</MoreMin> */}
        <Community>
          <Ckeditor />

          <CommunitySlide>
            <CommunitySlideBox onClick={onClick}>x</CommunitySlideBox>

            <CommunitySlideBox2
              onClick={() => {
                setChangeTwo(!changeTwo);
              }}
            >
              x
            </CommunitySlideBox2>
            <CommunitySlideBox3>x</CommunitySlideBox3>
          </CommunitySlide>
        </Community>
      </BigSmallBox>
      <BigSlideBox>
        <UserBox>123</UserBox>
      </BigSlideBox>
    </BigBox>
  );
};

export default App;

const BigBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding: 50px;
  /* border: 1px solid black; */
`;

const BigSmallBox = styled.div`
  width: 1500px;
`;

const SmallBox = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid black;
  text-align: center;
  font-size: 80px;
  font-weight: bold;
`;

const Toggle = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: beige; */
  display: flex;
  justify-content: space-between;
`;

const SmallListBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ListBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: aqua;
`;

const ListBox2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: aquamarine;
`;

const MoreMin = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
`;

const Community = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid black;
  display: flex;
  justify-content: flex-end;
`;

const CommunitySlide = styled.div`
  width: 100px;
  height: 480px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

const CommunitySlideBox = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid black;
  box-shadow: inset;
`;

const CommunitySlideBox2 = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid black;
`;

const CommunitySlideBox3 = styled.div`
  width: 70px;
  height: 70px;
  border: 1px solid black;
`;

const CommunitySlide2 = styled.div`
  width: 100%;
  height: 500px;
  background-color: aqua;
  display: flex;
  justify-content: flex-end;
`;

const CommunitySlide3 = styled.div`
  width: 100%;
  height: 500px;
  background-color: black;
  display: flex;
  justify-content: flex-end;
`;

const ListBox3 = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
`;

const BigSlideBox = styled.div`
  width: 100px;
  height: 500px;
  background-color: aquamarine;
`;

const UserBox = styled.div`
  width: 30%;
  height: 300px;
  display: flex;
  justify-content: flex-end;
`;
