import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
// Video: https://www.youtube.com/watch?v=8KB3DHI-QbM
// Code: https://github.com/chrisblakely01/react-notes-app
// CSS: https://raw.githubusercontent.com/chrisblakely01/react-notes-app/master/src/index.css

const App = () => {
  const [searchText, setSearchText] = useState('');

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

    // The filter() method creates a new array filled with elements that pass a test provided by a function (note.id !== id).
    // Here, it creates a new array with elements NOT having the same ID as the ID passed in, meaning that if it does,
    // it will NOT be included in the array, effectively, deleting it.
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className='container'>
      <Search handleSearchNote={setSearchText} />
      <NotesList
        // Filter the notes based on the search term before it gets passed to the notes list:
        // 'note.text' is the text of the note.
        // So, take the current list of notes, filter those notes to return only the ones that include the search text,
        // which is what the user has typed into the search bar.
        // It will then pass the result of this to the 'NotesList' component as a 'notes' prop:
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
