import React from 'react';
import './WhatsAppButton.css'; // Aapki CSS file

const WhatsAppButton = () => {
    // Apna sahi 10-digit mobile number country code (91) ke saath daalein
    const phoneNumber = '916351849422';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I'm interested in your travel packages.")}`;

    return (
        <a
            href={whatsappUrl}
            className="whatsapp-float-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            {/* --- Naya WhatsApp Icon Yahan Add Kiya Gaya Hai --- */}
            <svg
                viewBox="0 0 32 32"
                className="whatsapp-icon"
                fill="currentColor"
            >
                <path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.044-.53-.044-.315 0-.765.11-1.057.33-.29.22-.504.52-.69.85-.188.33-.36.765-.36 1.29 0 .525.33.99.69 1.635.36.645 1.023 1.518 1.56 2.162 1.058 1.29 2.358 2.26 3.797 2.967.587.282 1.16.504 1.76.687.6.188 1.17.143 1.518-.044.33-.187.99-.945 1.17-1.22.188-.272.188-.525.072-.687-.11-.143-.33-.215-.6-.33z M16 4.5C9.402 4.5 4.5 9.402 4.5 16S9.402 27.5 16 27.5 27.5 22.598 27.5 16 22.598 4.5 16 4.5zm0 21.5C10.477 26 6 21.523 6 16S10.477 7 16 7s10 4.477 10 9-4.477 10-10 10z" fillRule="evenodd"></path>
            </svg>
        </a>
    );
};

export default WhatsAppButton;