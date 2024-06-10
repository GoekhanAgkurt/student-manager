import { useState } from "react"
import StudentDetails from "./studentDetails";

export default function StudentItem({ student, onDeleteStudent, onEditStudent, groups }) {

    const [isOpen, setIsOpen] = useState(false);

    function onClose() {
        setIsOpen(!isOpen)
    }

    return (
        <tr>
            <td> {student.name} </td>
            <td>{student.secondName}</td>
            <td> {student.id}</td>
            <td> {student.birthday}</td>
            <td> {student.group}</td>
            <td> {student.sex}</td>
            <td><button className="detailsButton" onClick={() => setIsOpen(!isOpen)}>details</button></td>

            <td>
                {isOpen && (
                    <StudentDetails
                        student={student}
                        groups={groups}
                        onClose={onClose}
                        onDeleteStudent={onDeleteStudent}
                        onEditStudent={onEditStudent}

                    />
                )}
            </td>

        </tr>



    )
}