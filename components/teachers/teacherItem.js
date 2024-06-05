import { useState } from "react"
import TeacherDetails from "./teacherDetails";

export default function TeacherItem({ teacher, onDeleteTeacher, onEditTeacher, teachers, groups }) {

    const [isOpen, setIsOpen] = useState(false);

    function closeDetails() {
        setIsOpen(false);
    }



    return (

        <>
            <tr >
                <td>{teacher.name}</td>
                <td>{teacher.secondName}</td>
                <td>{teacher.id}</td>
                <td>{teacher.group} </td>
                <td>{teacher.phone}</td>
                <td>{teacher.email}</td>
                <td style={{ width: "70px" }}>
                    <button onClick={() => setIsOpen(!isOpen)} className="detailsButton">details</button>
                </td>
            </tr >

            {isOpen && (
                <TeacherDetails
                    key={key.id}
                    teacher={teacher}
                    teachers={teachers}
                    groups={groups}
                    onClose={closeDetails}
                    onDeleteTeacher={onDeleteTeacher}
                    onEditTeacher={onEditTeacher}
                />
            )}
        </>
    )
}