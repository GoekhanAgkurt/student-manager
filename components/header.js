import { useState } from "react";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);




    return (
        <header style={{ width: "100%", padding: "15px", display: "flex", justifyContent: "space-between", position: "fixed", top: "0px", }}>
            <span style={{ color: "white", fontSize: "1.2em", fontWeight: "bold" }}>Student Manager</span>
            <div onClick={() => setIsOpen(!isOpen)} style={{ position: "absolute", right: "20px", cursor: "pointer" }}>✖️</div>

            {isOpen && (
                <div style={{ width: "400px", height: "100%", backgroundColor: "darkslategray", position: "absolute", top: "51px", right: "0px", }}>
                    <ul style={{ margin: "30px" }}>
                        <li style={{ color: "white", marginTop: "10px" }}>Link 1</li>
                        <li style={{ color: "white", marginTop: "10px" }}>Link 2</li>
                        <li style={{ color: "white", marginTop: "10px" }}>Link 3</li>
                        <li style={{ color: "white", marginTop: "10px" }}>Link 4</li>
                    </ul>


                </div>
            )}


        </header>
    )

}