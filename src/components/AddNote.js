import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    // Check that value user types is valid before saving it to state -
    // use 'trim' to remove whitespace from the start and end of a string:
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);

      // Reset textarea after submit
      setNoteText('');
    }
  };

  return (
    <div className='note new'>
      <textarea
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className='note-footer'>
        <small>200 Remaining</small>
        <button className='save' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
