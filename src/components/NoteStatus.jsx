const NoteStatus = ({ note }) => {
  const completed = note.filter((note) => note.completed).length;
  if (!note.length) {
    return <h2>No notes has already been added</h2>
    
  }
  return  (
    <ul className="note-status">
      <li>
        All<span>{note.length}</span>
      </li>
      <li>
        Completed<span>{completed}</span>
      </li>
      <li>
        Open<span>{note.length - completed}</span>
      </li>
    </ul>
  )
};
export default NoteStatus;
