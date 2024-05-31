import StudentItem from "./studentItem";

export default function StudentList({ students, onDeleteStudent, onEditStudent }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Second Name</th>
                    <th>ID</th>
                    <th>Birthday</th>
                    <th>Group</th>
                    <th>sex</th>
                    <th>E Mail</th>
                    <th>Number</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <StudentItem key={student.id} student={student} onDeleteStudent={onDeleteStudent} onEditStudent={onEditStudent} />
                ))}

            </tbody>
        </table>

    )
}