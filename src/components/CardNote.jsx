import React from "react";
import DeleteButton from "../components/DeleteButton";
import ArchiveButton from "./ArchiveButton";
import UnarchiveButton from "./UnarchiveButton";

class CardNote extends React.Component {
    render() {
        return (
            <div>
                <div className="note-container">
                    <h2 className="note-headline">Your Note</h2>
                    <div className="card-container">
                        {this.props.notes.length > 0 ? (
                            this.props.notes.map((note) => (
                                <div className="card" key={note.id}>
                                    <div className="card-header">
                                        <h3>{note.title}</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>{note.body}</p>
                                    </div>
                                    <div className="card-footer">
                                        <p>dibuat pada: {note.createdAt}</p>
                                    </div>
                                    <div className="card-button">
                                        <DeleteButton id={note.id} onDelete={this.props.onDelete} />
                                        <ArchiveButton id={note.id} onArchive={this.props.onArchive} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="card-empty">Tidak terdapat catatan tersimpan</p>
                        )}
                    </div>

                    <h2 className="note-headline">Archive Note</h2>
                    <div className="card-container">
                        {
                            this.props.archivedNotes.length > 0 ? (
                                this.props.archivedNotes.map((note) => (
                                    <div className="card" key={note.id}>
                                        <div className="card-header">
                                            <h3>{note.title}</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>{note.body}</p>
                                        </div>
                                        <div className="card-footer">
                                            <p>dibuat pada: {note.createdAt}</p>
                                        </div>
                                        <div className="card-button">
                                            <DeleteButton id={note.id} onDelete={this.props.onDelete} />
                                            <UnarchiveButton id={note.id} onUnarchive={this.props.onUnarchive} />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="card-empty">Tidak terdapat catatan tersimpan pada archive</p>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CardNote;