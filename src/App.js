import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
// Video: https://www.youtube.com/watch?v=8KB3DHI-QbM
// Code: https://github.com/chrisblakely01/react-notes-app
// CSS: https://raw.githubusercontent.com/chrisblakely01/react-notes-app/master/src/index.css

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '07/28/2022',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '07/29/2022',
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '08/02/2022',
    },
    {
      id: nanoid(),
      text: 'This is my fourth note!',
      date: '08/05/2022',
    },
  ]);

  // Add a note
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString(),
    };
    // Create a  new array of new notes - use spread operator so as not to mutate the state, which is bad
    const newNotes = [...notes, newNote];

    // Update the state with the new array of new notes
    setNotes(newNotes);
  };

  // Delete a note
  const deleteNote = (id) => {
    // Use filter function on 'notes' array:
    // to remove the note that has the same ID as the ID passed in above (the one passed in when the delete button is clicked).
    // The filter function returns a new array, so we don't have to worry about creating a new array (like we do above when adding a new note).
    // Instead, we can just assign the clicked on note to a variable:
    // 'const newNotes = ...'
    // Then use 'SetNotes' and pass in the new array.
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className='container'>
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
