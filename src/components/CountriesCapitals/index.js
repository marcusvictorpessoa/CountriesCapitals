import React, { useEffect, useState } from "react";

export default function CountriesCapitals({ countriescapitalslist }) {

    const [countcaplist, setCountcaplist] = useState([]);

    useEffect();
    
    return (
        <div>
            <ul>
                {countcaplist.map((element) => {
                    return (
                        <li key={element}>
                            {element}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
