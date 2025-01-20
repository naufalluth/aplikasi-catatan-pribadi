import React from "react";

export default function DeleteButton({ id, onDelete }) {
    return (
        <button onClick={() => onDelete(id)} className="delete-button">
            Delete
        </button>
    );
}
