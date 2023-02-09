import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Modal = ({ setIsOpen }) => {
  const [data, setData] = useState({});
  console.log(data);
  const closeMOdal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    fetch("./data/manifest.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  return (
    <Div>
      <Cancle onClick={closeMOdal}>cancle</Cancle>
      <DivBox key={data.id}>{data.imges_url}</DivBox>
      <DivBox2>{data.imges_url}</DivBox2>
    </Div>
  );
};

export default Modal;

const Div = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  position: absolute;

  background-color: white;
  gap: 10px;
`;

const Cancle = styled.div`
  font-size: 20px;
  font-weight: lighter;

  cursor: pointer;
`;

const DivBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: azure;
  gap: 100px;
`;

const DivBox2 = styled.div`
  width: 200px;
  height: 200px;
  background-color: black;
`;