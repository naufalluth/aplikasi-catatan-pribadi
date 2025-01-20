import React from 'react';
import NoteItem from './NoteItem';

function ArchiveList({ notes, onDelete, onUnarchive }) {
    return (
        <div className="archive-list">
            {notes.map(note => (
                <NoteItem
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    archived={note.archived}
                    onDelete={onDelete}
                    onArchive={onUnarchive}
                />
            ))}
        </div>
    );
}

export default ArchiveList;
