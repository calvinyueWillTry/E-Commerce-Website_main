import React, { useState } from "react";

//too complex: replace with a dropdown to select string value? 
function StarRating() {
    const [rate, setRate] = useState(null);
    const [hovering, setHovering] = useState(null);
    const [sumStars, setSumStars] = useState(10);

    return (

        <div>
            {[...Array(sumStars)].map((star, index) => {
                const currentrate = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="Rating"
                            value={currentrate}
                            onChange={() => setRate(currentrate)}
                        />
                        <span
                            className="Stars"
                            style={{
                                color: currentrate <= (hovering || rate) ? "#ffc107" : "#e4e5e9"
                            }}
                            onMouseEnter={() => setHovering(currentrate)}
                            onMouseLeave={() => setHovering(null)}
                        >
                            &#9733;
                        </span>
                    </label>
                );
            })}
        </div>
    );
};
export default StarRating;