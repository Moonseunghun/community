import React from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Ckeditor = () => {
  return (
    <Editor>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
        // editor={ClassicEditor}
        // config={{
        //   plugins: [Paragraph, Bold, Italic, Essentials],
        //   toolbar: ["bold", "italic"],
        // }}
        // data="<p>Hello from the first editor working with the context!</p>"
        // onReady={(editor) => {
        //   // You can store the "editor" and use when it is needed.
        //   console.log("Editor1 is ready to use!", editor);
        // }}
      />
    </Editor>
  );
};

export default Ckeditor;

const Editor = styled.div`
  width: 1000px;
  background-color: aliceblue;
`;
