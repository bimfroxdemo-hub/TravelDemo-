import React from 'react';
import './SectionHeader.css'; // Is component ki apni CSS

const SectionHeader = ({ subHeading, mainHeading, description }) => {
    // Main heading ko aakhri shabd ke hisaab se split karna
    const words = mainHeading.split(' ');
    const highlightedWord = words.pop(); // Aakhri shabd ko nikaal lein
    const normalText = words.join(' '); // Baaki ke shabdon ko jod dein

    return (
        <div className="section-header-container">
            <div className="sub-heading">
                <span>{subHeading}</span>
            </div>
            <h2 className="main-heading">
                {normalText} <span>{highlightedWord}</span>
            </h2>
            {description && (
                <p className="section-description">{description}</p>
            )}
        </div>
    );
};

export default SectionHeader;