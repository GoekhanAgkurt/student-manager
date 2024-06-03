import TeacherItem from "./teacherItem";

export default function TeacherList({ teachers, groups, onDeleteTeacher }) {
    return (
        <table>
            <thead>
                <tr>
                    <th> Id</th>
                    <th>Name</th>
                    <th>Second Name</th>
                    <th> Group</th>
                    <th> Phone</th>
                    <th> E-Mail</th>
                    <th> Action</th>
                </tr>
            </thead>
            <tbody>

                {teachers.map((teacher) => (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        groups={groups}
                        onDeleteTeacher={onDeleteTeacher}
                    />
                ))}
            </tbody>
        </table>
    )
}