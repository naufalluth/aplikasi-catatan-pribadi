import React from "react";

export default function ArchiveButton({ id, onArchive }) {
    return (
        <button onClick={() => onArchive(id)} className="archive-button">
            Archive
        </button>
    );
}