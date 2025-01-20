import React from "react";

export default function UnarchiveButton({ id, onUnarchive }) {
    return (
        <button onClick={() => onUnarchive(id)} className="unarchive-button">
            Unarchive
        </button>
    );
}