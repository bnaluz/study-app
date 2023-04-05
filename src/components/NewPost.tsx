import { useState } from "react";

type NewPostProps = {
  onCancel: any;
  onAddNote: any;
};

function NewPost({ onCancel, onAddNote }: NewPostProps) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (e: any) => {
    setEnteredBody(e.target.value);
  };

  const authorChangeHandler = (e: any) => {
    setEnteredAuthor(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    const noteData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddNote(noteData);
    onCancel();
  };

  return (
    <form className="bg-slate-500 pb-4 w-[450px]" onSubmit={submitHandler}>
      <p>
        <label className="block font-bold text-center p-1" htmlFor="body">
          Note
        </label>
        <textarea
          className="block p-2 w-3/4 rounded-lg pb-2 bg-white mx-auto"
          id="body"
          required
          rows={4}
          onChange={bodyChangeHandler}
        />
      </p>

      <p>
        <label className="block font-bold mb-1 text-center p-1" htmlFor="name">
          Name
        </label>
        <input
          className="block w-3/4 p-1 rounded-lg  bg-white mx-auto"
          type="text"
          id="name"
          required
          onChange={authorChangeHandler}
        />
      </p>
      <div className="mt-3">
        <button className="ml-3 rounded-lg bg-slate-300 px-3">Submit</button>
        <button
          onClick={onCancel}
          type="button"
          className="ml-1 hover:text-white px-3"
        >
          Close
        </button>
      </div>
    </form>
  );
}

export default NewPost;
