import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [note, setNote] = useState([]);
  const[sortBy,setSortBy]=useState("latest")

  const handleAddNewNote = (newNote) => {
    if (newNote.title) {
      setNote((prevNot) => [...prevNot, newNote]);

    }
  };
  const handleDeleteNote = (id) => {
    const filteredNote = note.filter((note) => note.id !== id);
    setNote(filteredNote);
  };
  const handleCheckNote = (e) => {
    const noteId = Number(e);
    const newNote = note.map((note) =>
      note.id === noteId ? { ...note, completed: !note.completed } : note
    );
    console.log(note);
    setNote(newNote);
    // setNote((prevNote) =>
    //   prevNote.map((note) => {
    //     note.id === noteId ? { ...note, completed: !note.completed } : note
    //   })
    // );
  };

  let sortedNote =note;
  if (sortBy=='latest') {
    sortedNote =[...note].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
  }else if (sortBy=='earliest') {
    sortedNote =[...note].sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt))
  }else{
    sortedNote =[...note].sort((a,b)=>new Date(b.completed)-new Date(a.completed))

  }
  
  return (
    <div className="container">
      <NoteHeader note={note} setSortBy={(e)=>setSortBy(e.target.value)} sortBy={sortBy}/>
      <div className="note-app">
        <AddNewNote onAddNote={handleAddNewNote} />
        <div className="note-container">
          <NoteList
            note={sortedNote}
            ondelete={handleDeleteNote}
            handleCheck={handleCheckNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
