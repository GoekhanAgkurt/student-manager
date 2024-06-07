import { useState } from "react"
import Icon from "@/lib/icons";


export default function Header() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (

        <header>
            <span>Student Manager</span>
            <div style={{ position: "relative" }}>

                <div onClick={() => setMenuIsOpen(!menuIsOpen)} style={{ cursor: "pointer" }}>
                    {!menuIsOpen ? <Icon variant="menu" color="white" /> : <Icon variant="cancel" color="white" />}
                </div>

                {menuIsOpen && (
                    <div>
                        <div style={{
                            width: "100vw", height: "400px", background: "darkslategray", zIndex: "3",
                            position: "absolute", right: "-15px", bottom: "0", top: "37px", display: "flex", padding: "50px", boxShadow: "3px 3px 4px #888888"
                        }}>

                            <ul>
                                <li>About Project</li>
                                <li>About me</li>
                                <li>Menu 3</li>
                                <li>Menu 4</li>
                                <li>Setting</li>
                                <li> </li>
                                <li> </li>
                                <li>goekhan.agkurt@outlook.de</li>
                            </ul>
                        </div>

                        <div>hlhlh</div>
                    </div>
                )}
            </div>
        </header>

    )
}