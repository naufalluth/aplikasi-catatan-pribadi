import React from "react";


class CreateNote extends React.Component {
    render() {
        return (
            <div>
                <h2>Create Note</h2>
                <form>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                    <label htmlFor="content">Content</label>
                    <input type="text" name="content" id="content" />
                    <button type="submit">Submit</button>
                </form>
            </div >
        );
    }
}

export default CreateNote;