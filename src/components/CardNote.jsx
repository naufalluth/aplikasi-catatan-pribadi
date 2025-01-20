import React from "react";
import DeleteButton from "../components/DeleteButton";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };

        this.addNoteHandler = this.addNoteHandler.bind(this);
    }

    addNoteHandler(note) {
        this.setState((prevState) => {
            return {
                notes: [...prevState.notes, note]
            };
        });
    }

    render() {
        return (
            <div>
                <h2>Card Note</h2>

                {
                    this.props.notes.map((note) => (
                        <div className="card" key={note.id}>
                            <h3>{note.title}</h3>
                            <p>{note.body}</p>
                            <DeleteButton id={note.id} onDelete={this.props.onDelete} />
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default NoteApp;