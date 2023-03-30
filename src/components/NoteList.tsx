import Modal from "@/UI/Modal";
import React, { useState, useEffect } from "react";
import NewPost from "./NewPost";
import Note from "./Note";

const NoteList = ({ newNote, hideModal }: any) => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchNotes() {
      setIsLoading(true);
      const res = await fetch(
        "https://notes-bbb9b-default-rtdb.firebaseio.com/notes.json"
      );
      const resData = await res.json();
      const loadedNotes = [];
      for (const key in resData) {
        loadedNotes.push({
          id: key,
          author: resData[key].author,
          body: resData[key].body,
        });
      }
      //@ts-ignore
      setNotes(loadedNotes);
      setIsLoading(false);
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

    // @ts-ignore
    setNotes((existingNotes) => [noteData, ...existingNotes]);
    console.log(data);
    console.log(notes);
  };

  const deleteNoteHandler = async (id: string) => {
    await fetch(
      `https://notes-bbb9b-default-rtdb.firebaseio.com/notes/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "applications/json",
        },
      }
    );

    setNotes(notes.filter((note) => note.id !== id));
    console.log(notes);
  };

  return (
    <div className="pt-24">
      {!isLoading && newNote && (
        <Modal onClickModal={hideModal}>
          <NewPost onCancel={hideModal} onAddNote={addNoteHandler} />
        </Modal>
      )}

      <ul className="max-w-[50rem] grid grid-cols-3 ">
        {notes.map((eachNote) => (
          <Note
            onDelete={() => deleteNoteHandler(eachNote.id)}
            key={eachNote.body}
            id={eachNote.id}
            author={eachNote.author}
            body={eachNote.body}
          />
        ))}
      </ul>
      {isLoading && (
        <div className="text-center text-black">
          <p>Loading notes...</p>
        </div>
      )}
    </div>
  );
};
export default NoteList;
