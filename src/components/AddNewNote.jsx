import { useState } from "react";

const AddNewNote = ({onAddNote}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote)
    setTitle("");
    setDescription("");
  };
  return (
    <div className="add-new-note">
      <h2>add new note</h2>
      <form action="" className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          type="text"
          className="text-field"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
          type="text"
          className="text-field"
        />
        <button className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
};
export default AddNewNote;
