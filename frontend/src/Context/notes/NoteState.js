import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  //get all notes
  const getNotes = async () => {
    const response = await fetch(
      `https://i-notes-delta.vercel.app/api/notes/fetchallnotes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  const addNote = async ({ title, description, tag }) => {
    const response = await fetch(
      `https://i-notes-delta.vercel.app/api/notes/addnote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    const note = await response.json();

    // console.log(note);
    setNotes(notes.concat(note));
  };
  // Delete a Note
  const deleteNote = async (id) => {
    // TODO : API CALL
    const response = await fetch(
      `https://i-notes-delta.vercel.app/api/notes/deletenote/${id}`,
      {
        // await it is true you should accept it
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = response.json();
    console.log(json);

    console.log("Deleting Note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const editNote = async (id, title, description, tag) => {
    const response = await fetch(
      `https://i-notes-delta.vercel.app/api/notes/updatenote/${id}`,
      {
        // await it is true you should accept it
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    const json = response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    // console.log(newNotes);
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, getNotes, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
