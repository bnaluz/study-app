import Modal from "@/UI/Modal";
import React, { useState, useEffect } from "react";
import { MdEditNote } from "react-icons/md";
import NewPost from "./NewPost";
import Note from "./Note";

type noteTypes = {
  id: string;
  body: string;
  author: string;
};

const NoteList = ({ newNote, hideModal }: any) => {
  const [notes, setNotes] = useState<noteTypes[]>([]);
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

      console.log(loadedNotes);
      setNotes(loadedNotes);
      setIsLoading(false);
    }
    fetchNotes();
  }, []);

  const addNoteHandler = async (noteData: noteTypes) => {
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
    const totalNote = {
      id: data.name,
      author: noteData.author,
      body: noteData.body,
    };
    console.log(totalNote);
    setNotes((existingNotes) => [totalNote, ...existingNotes]);
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
    // setNotes();
    console.log(notes);
  };

  return (
    <div className="pt-28">
      {!isLoading && newNote && (
        <Modal onClickModal={hideModal}>
          <NewPost onCancel={hideModal} onAddNote={addNoteHandler} />
        </Modal>
      )}

      <ul className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {notes.map((eachNote) => (
          <Note
            onDelete={() => deleteNoteHandler(eachNote.id)}
            key={eachNote.id}
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
