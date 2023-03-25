import React from "react";

type NoteProps = {
  author: string;
  body: string;
};

const Note = ({ author, body }: NoteProps) => {
  return (
    <li className="pt-2 mt-2 mx-2 rounded-lg  bg-blue-100 shadow-xl shadow-gray-300  ">
      <p className="font-bold ml-2">{author}</p>
      <p className="text-left ml-2">{body}</p>
    </li>
  );
};

export default Note;
