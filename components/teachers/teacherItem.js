import { useState } from "react"
import TeacherDetails from "./teacherDetails";

export default function TeacherItem({ teacher, onDeleteTeacher, onEditTeacher, teachers }) {

    const [isOpen, setIsOpen] = useState(false);

    function closeDetails() {
        setIsOpen(false);
    }



    return (
        <tr >
            <td>{teacher.id}</td>
            <td>{teacher.name}</td>
            <td>{teacher.secondName}</td>
            <td>{teacher.group} </td>
            <td>{teacher.phone}</td>
            <td>{teacher.email}</td>
            <td style={{ width: "70px" }}><button onClick={() => setIsOpen(!isOpen)} className="detailsButton">details</button></td>
            {isOpen && (
                <TeacherDetails
                    teacher={teacher}
                    teachers={teachers}
                    onClose={closeDetails}
                    onDeleteTeacher={onDeleteTeacher}
                    onEditTeacher={onEditTeacher}
                />
            )}

        </tr >
    )
}