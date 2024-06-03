import { useState } from "react"
import TeacherDetails from "./teacherDetails";
export default function TeacherItem({ teacher, }) {

    const [isOpen, setIsOpen] = useState(false);

    function closeDetails() {
        setIsOpen(false);
    }

    return (
        <tr >
            <th>{teacher.id}</th>
            <th>{teacher.name}</th>
            <th>{teacher.secondName}</th>
            <th>{teacher.group} </th>
            <th>{teacher.phone}</th>
            <th>{teacher.email}</th>
            <th style={{ width: "70px" }}><button onClick={() => setIsOpen(!isOpen)} style={{ background: "darkslategray", color: "white" }}>details</button></th>

            {isOpen && (
                <TeacherDetails
                    teacher={teacher}
                    onClose={closeDetails} />

            )}

        </tr >
    )
}