import NoteItem from "./NoteItem";
import NoteStatus from "./NoteStatus";

const NoteList = ({ note, ondelete, handleCheck }) => {
  return (
    <div>
      <NoteStatus note={note}/>

      {note.map((singleNote) => (
        <NoteItem
          key={singleNote.id}
          note={singleNote}
          ondelete={ondelete}
          handleCheck={handleCheck}
        />
      ))}
    </div>
  );
};

export default NoteList;
