import Modal from "@/UI/Modal";
import React, { useState } from "react";
import NewPost from "./NewPost";
import Note from "./Note";

const NoteList = () => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalVisible, setModalVisible] = useState(true);

  const bodyChangeHandler = (e: any) => {
    setEnteredBody(e.target.value);
  };

  const authorChangeHandler = (e: any) => {
    setEnteredAuthor(e.target.value);
  };

  const modalShowHandler = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div className="pt-24">
      {modalVisible && (
        <Modal onClickModal={modalShowHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}

      <ul className="max-w-[50rem] grid grid-cols-3 ">
        <Note body={enteredBody} author={enteredAuthor} />
        <Note body="body is prop used in note" author="hello" />
      </ul>
    </div>
  );
};
export default NoteList;
