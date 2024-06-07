import { useEffect, useState } from "react";
import Icon from "@/lib/icons";

export default function SearchBar({ data, onSearch, placeholder }) {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const foundItems = data.filter(item =>
                Object.values(item).some(value =>
                    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
            onSearch(foundItems);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchTerm, data, onSearch]);

    return (
        <div style={{ position: "relative", width: "100%" }}>

            <input
                type="text"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={placeholder}
                className="search-bar"
                style={{
                    width: "99%",
                    height: "45px",
                    fontSize: "0.9em",
                    marginTop: "0px",
                    marginLeft: "10px",
                    paddingRight: "0px"
                }}
            />
            <Icon
                variant="search"
                color="gray"
                style={{
                    position: "absolute",
                    right: "20px", // Adjust as needed
                    top: "50%",
                    transform: "translateY(-50%)"
                }}
            />        </div>
    );
}

