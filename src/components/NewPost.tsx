type NewPostProps = {
  onBodyChange: any;
  onAuthorChange: any;
};
function NewPost({ onBodyChange, onAuthorChange }: NewPostProps) {
  return (
    <form className="bg-blue-500 pb-4 w-96">
      <p>
        <label className="block font-bold text-center" htmlFor="body">
          Note
        </label>
        <textarea
          className="block p-2 w-3/4 rounded-lg pb-2 bg-blue-300 mx-auto"
          id="body"
          required
          rows={3}
          onChange={onBodyChange}
        />
      </p>

      <p>
        <label className="block font-bold mb-1 text-center" htmlFor="name">
          Name
        </label>
        <input
          className="block w-3/4 p-1 rounded-lg  bg-blue-300 mx-auto"
          type="text"
          id="name"
          required
          onChange={onAuthorChange}
        />
      </p>
    </form>
  );
}

export default NewPost;
