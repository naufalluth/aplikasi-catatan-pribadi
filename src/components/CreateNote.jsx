import React from "react";

class CreateNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: new Date().getTime(),
            title: "",
            body: "",
            archive: false,
            createdAt: this.getFullDate()
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.getFullDate = this.getFullDate.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            };
        });
    }

    onBodyChangeHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            id: new Date().getTime(),
            title: "",
            body: "",
            archive: false,
            createdAt: this.getFullDate()
        });
    }

    getFullDate() {
        const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        const date = new Date();
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    render() {
        return (
            <div>
                <h2 className="create-note-headline">Tulis Catatan Baru</h2>
                <form className="note-input" onSubmit={this.onSubmitHandler}>
                    <div className="note-input-field">
                        <label htmlFor="title" className="note-input-label">Title</label>
                        <input className="note-input-title" type="text" name="title" id="title" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeHandler} />
                        <label htmlFor="body" className="note-input-label">Content</label>
                        <textarea className="note-input-body" type="text" name="body" placeholder="Isi Catatan" id="body" value={this.state.body} onChange={this.onBodyChangeHandler} />
                    </div>
                    <button className="note-submit-button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateNote;