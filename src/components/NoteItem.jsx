const NoteItem = ({ note, ondelete, handleCheck }) => {
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.completed?"completed":""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => ondelete(note.id)}>X</button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.completed}
            onChange={() => handleCheck(note.id)}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", option)}
        {console.log(new Date(note.createdAt).toLocaleDateString("en-US"),111111111111111111111111111111111111111)}
      </div>
    </div>
  );
};
export default NoteItem;
