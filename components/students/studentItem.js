import { useState } from "react"
import StudentDetails from "./studentDetails";
import Icon from "@/lib/icons";

export default function StudentItem({ student, onDeleteStudent, onEditStudent, groups }) {

    const [isOpen, setIsOpen] = useState(false);

    function onClose() {
        setIsOpen(!isOpen)
    }

    const renderSex = (sex) => {
        if (sex === "boy") {
            return <Icon variant="circle" color="#3864d1" />;
        } else if (sex === "girl") {
            return <Icon variant="circle" color="#ed58d2" />;
        } else {
            return sex; // Falls das Geschlecht etwas anderes oder leer ist
        }
    };


    return (
        <tr>
            <td> {student.name} </td>
            <td>{student.secondName}</td>
            <td> {student.id}</td>
            <td> {student.birthday}</td>
            <td> {student.group}</td>
            <td>{renderSex(student.sex)}</td> {/* Verwendung der renderSex-Funktion */}
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