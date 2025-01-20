import React from "react";
import CreateNote from "./components/CreateNote";
import CardNote from "./components/CardNote";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };

        this.addNoteHandler = this.addNoteHandler.bind(this);
        this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
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
                notes: prevState.notes.filter(note => note.id !== id)
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Aplikasi Catatan Pribadi</h1>
                <CreateNote onSubmit={this.addNoteHandler} />
                <CardNote notes={this.state.notes} onDelete={this.deleteNoteHandler} />
            </div>
        );
    }
}

export default NoteApp;