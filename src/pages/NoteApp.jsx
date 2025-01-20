import React from "react";
import CreateNote from "../components/CreateNote";
import CardNote from "../components/CardNote";
import { getInitialData } from "../utils/index";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData().filter(note => !note.archived),
            archivedNotes: getInitialData().filter(note => note.archived)
        };

        this.addNoteHandler = this.addNoteHandler.bind(this);
        this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
        this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
        this.unarchiveNoteHandler = this.unarchiveNoteHandler.bind(this);
    }

    addNoteHandler(note) {
        this.setState((prevState) => {
            return {
                notes: [...prevState.notes, note]
            };
        });
    }

    deleteNoteHandler(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.filter(note => note.id !== id),
                archivedNotes: prevState.archivedNotes.filter(note => note.id !== id)
            };
        });
    }

    archiveNoteHandler(id) {
        this.setState((prevState) => {
            const noteToArchive = prevState.notes.find(note => note.id === id);
            noteToArchive.archived = true;
            return {
                notes: prevState.notes.filter(note => note.id !== id),
                archivedNotes: [...prevState.archivedNotes, noteToArchive]
            };
        });
    }

    unarchiveNoteHandler(id) {
        this.setState((prevState) => {
            const noteToUnarchive = prevState.archivedNotes.find(note => note.id === id);
            noteToUnarchive.archived = false;
            return {
                notes: [...prevState.notes, noteToUnarchive],
                archivedNotes: prevState.archivedNotes.filter(note => note.id !== id)
            };
        });
    }

    render() {
        return (
            <div>
                <h1 className="app-headline">Aplikasi Catatan Pribadi</h1>
                <CreateNote onSubmit={this.addNoteHandler} />
                <CardNote notes={this.state.notes} archivedNotes={this.state.archivedNotes} onDelete={this.deleteNoteHandler} onArchive={this.archiveNoteHandler} onUnarchive={this.unarchiveNoteHandler} />
            </div>
        );
    }
}

export default NoteApp;