import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Modal = ({ setIsOpen }) => {
  const [data, setData] = useState({});
  const fileInput = React.useRef(null);
  const [loading, setLoading] = useState(true);

  console.log(data);

  const closeMOdal = () => {
    setIsOpen(false);
  };

  const handleInput = (e) => {
    fileInput.cur.click();
  };

  const handleChange = (e) => {
    console.log(e.target.files[0]);
  };

  useEffect(() => {
    fetch("./data/manifest.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  if (loading) return;
  console.log(data[0].image_url[0]);
  return (
    <Div key={data[0].id}>
      <Cancle onClick={closeMOdal}>cancle</Cancle>
      <DivBox src={data[0].image_url[0]} alt="img">
        {data[0].name}
      </DivBox>
      {/* <button handleInput={handleInput}>파일 선택하기</button>
      <input
        type="file"
        multiple={true}
        id="fileUpload"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={handleChange}
      /> */}
      <DivBox2 src={data[0].image_url[1]} alt="img" />
    </Div>
  );
};

export default Modal;

const Div = styled.div`
  width: 500px;
  height: 600px;
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
  margin-bottom: 10px;
`;

const DivBox2 = styled.div``;
