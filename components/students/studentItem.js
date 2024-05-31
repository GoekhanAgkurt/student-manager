import { useState } from "react"
import StudentDetails from "./studentDetails";

export default function StudentItem({ student, onDeleteStudent }) {

    const [isOpen, setIsOpen] = useState(false);

    function onClose() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <tr>
                <th> {student.name}</th>
                <th>  {student.secondName}</th>
                <th>  {student.id}</th>
                <th>   {student.birthday}</th>
                <th>   {student.group}</th>
                <th>   {student.sex}</th>
                <th>{student.email}</th>
                <th> {student.phone}</th>
                <th><button onClick={() => setIsOpen(!isOpen)}>details</button></th>
            </tr>

            {isOpen && (
                <StudentDetails student={student} onClose={onClose} onDeleteStudent={onDeleteStudent} />
            )}


        </>
    )
}