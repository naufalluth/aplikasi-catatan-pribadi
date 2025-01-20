import React from "react";

class CreateNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: new Date().getTime(),
            title: "",
            body: "",
            archive: false,
            createdAt: new Date().toLocaleString()
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
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
            createdAt: new Date().toLocaleString()
        });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h2>Create Note</h2>
                <form className="note-input" onSubmit={this.onSubmitHandler}>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeHandler} />
                        <label htmlFor="body">Content</label>
                        <textarea type="text" name="body" id="body" value={this.state.body} onChange={this.onBodyChangeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateNote;