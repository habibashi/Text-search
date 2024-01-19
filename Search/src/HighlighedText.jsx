import React from 'react';

const HighlightedText = ({ text, highlight }) => {
    if (!highlight || !text) {
        return <>{text}</>;
    }

    const regex = new RegExp(`(${highlight})`, 'gi');

    const parts = text.split(regex);

    return (
        <>
            {parts.map((part, index) => (
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <span key={index} style={{ backgroundColor: 'yellow' }}>
                        {part}
                    </span>
                ) : (
                    <span key={index}>{part}</span>
                )
            ))}
        </>
    );
};

export default HighlightedText