import TeacherItem from "./teacherItem";

export default function TeacherList({ teachers, groups, onDeleteTeacher, onEditTeacher }) {


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
                        teacher={teacher}
                        key={teacher.id}
                        teachers={teachers}
                        groups={groups}
                        onDeleteTeacher={onDeleteTeacher}
                        onEditTeacher={onEditTeacher}
                    />
                ))}
            </tbody>
        </table>
    )
}