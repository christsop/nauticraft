import React, { useState } from "react";

export const Image = ({ title, largeImage, smallImage }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="portfolio-item">
                <div className="hover-bg" onClick={() => setOpen(true)}>
                    <div className="hover-text">
                        <h4>{title}</h4>
                    </div>
                    <img
                        src={smallImage}
                        className="img-responsive"
                        alt={title}
                    />
                </div>
            </div>

            {open && (
                <div className="image-modal" onClick={() => setOpen(false)}>
                    <span className="close">&times;</span>
                    <img
                        src={largeImage}
                        alt={title}
                        className="modal-image"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};