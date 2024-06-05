import { useEffect, useState } from "react";

export default function SearchBar({ data, onSearch, placeholder }) {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Verzögertes Suchergebnis zur Vermeidung von Endlosschleifen
        const timeoutId = setTimeout(() => {
            const foundItems = data.filter(item =>
                Object.values(item).some(value =>
                    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
            onSearch(foundItems);
        }, 300); // Setzt eine Verzögerung von 300 ms

        return () => clearTimeout(timeoutId); // Bereinigt den Timeout, wenn sich der Effekt ändert
    }, [searchTerm, data, onSearch]);

    return (
        <input
            type="text"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder={placeholder}
            className="search-bar"
            style={{ width: "100%", height: "45px", fontSize: "0.9em", marginTop: "0px", marginLeft: "10px" }}
        />
    );
}
