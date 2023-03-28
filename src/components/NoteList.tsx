import Modal from "@/UI/Modal";
import React, { useState, useEffect } from "react";
import NewPost from "./NewPost";
import Note from "./Note";

const NoteList = ({ newNote, hideModal }: any) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      const res = await fetch(
        "https://notes-bbb9b-default-rtdb.firebaseio.com/notes.json"
      );
      const resData = await res.json();
      setNotes(resData);
      console.log(resData);
    }

    fetchNotes();
  }, []);

  //@ts-ignore
  const addNoteHandler = async (noteData) => {
    const res = await fetch(
      "https://notes-bbb9b-default-rtdb.firebaseio.com/notes.json",
      {
        method: "POST",
        body: JSON.stringify(noteData),
        headers: {
          "Content-Type": "applications/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    //@ts-ignore
    // setNotes((existingNotes) => [noteData, ...existingNotes]);
  };

  return (
    <div className="pt-24">
      {newNote && (
        <Modal onClickModal={hideModal}>
          <NewPost onCancel={hideModal} onAddNote={addNoteHandler} />
        </Modal>
      )}

      <ul className="max-w-[50rem] grid grid-cols-3 ">
        {/* {notes.map((eachNote) => (
          <Note
            key={eachNote.body}
            author={eachNote.author}
            body={eachNote.body}
          />
        ))} */}
      </ul>
    </div>
  );
};
export default NoteList;
