import TeacherItem from "./teacherItem";

export default function TeacherList({ teachers, groups, onDeleteTeacher, onEditTeacher }) {


    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Second Name</th>
                    <th> Id</th>
                    <th> Group</th>
                    <th> Phone</th>
                    <th> E-Mail</th>
                    <th> Action</th>
                </tr>
            </thead>
            <tbody>
                {teachers.map((teacher) => (
                    <TeacherItem
                        teacher={teacher}
                        teachers={teachers}
                        key={teacher.id}
                        groups={groups}
                        onDeleteTeacher={onDeleteTeacher}
                        onEditTeacher={onEditTeacher}
                    />
                ))}
            </tbody>
        </table>
    )
}