import React, { MouseEventHandler } from "react";

type NoteProps = {
  author: string;
  body: string;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  id: string;
};

const Note = ({ author, body, onDelete, id }: NoteProps) => {
  return (
    <li
      id={id}
      className="pt-2 mt-2 mx-2  overflow-hidden rounded-lg bg-white "
    >
      <p className="text-left font-bold py-1 px-1 ml-2">{body}</p>
      <p className=" py-1 px-1 ml-2 italic">-{author}</p>
      <button
        className="rounded-xl hover:scale-105 bg-blue-600 px-2 mb-2 ml-2 text-white"
        onClick={onDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default Note;
