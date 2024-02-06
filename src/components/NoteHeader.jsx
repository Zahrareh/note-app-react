import { useState } from "react";

const NoteHeader = ({note,sortBy,setSortBy})=>{
    return(
        <div className="note-header">
            <h1>My Notes({note.length})</h1>
            <select value={sortBy} onChange={setSortBy}>
                <option value="latest">sort by lates notes</option>
                <option value='earliest'>sort by erleast notes</option>
                <option value='completed'>sort by completed notes</option>


            </select>
        </div>

    )
}
export default NoteHeader;