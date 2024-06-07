import StudentItem from "./studentItem";

export default function StudentList({ students, onDeleteStudent, onEditStudent, groups }) {
    return (
        <table>
            <thead>
                <tr>
                    <th style={{ width: "17%" }}>Name</th>
                    <th style={{ width: "20%" }}>Secondname</th>
                    <th style={{ width: "45%" }}>ID</th>
                    <th style={{ width: "20%" }}>Birthday</th>
                    <th style={{ width: "20%" }}>Group</th>
                    <th style={{ width: "15%" }}>sex</th>
                    <th style={{ width: "40%" }}>E Mail</th>
                    <th style={{ width: "30%" }}>Number</th>
                    <th style={{ width: "20%" }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <StudentItem
                        key={student.id}
                        student={student}
                        groups={groups}
                        onDeleteStudent={onDeleteStudent}
                        onEditStudent={onEditStudent}
                    />
                ))}
            </tbody>
        </table>
    );
}
