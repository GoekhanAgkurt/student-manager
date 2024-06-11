import TeacherItem from "./teacherItem";

export default function TeacherList({ teachers, groups, onDeleteTeacher, onEditTeacher }) {


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th style={{ width: "15%" }}>Name</th>
                        <th style={{ width: "15%" }}>Second Name</th>
                        <th style={{ width: "40%" }}> Id</th>
                        <th style={{ width: "20%" }}> Group</th>
                        <th style={{ width: "25%" }}> Phone</th>
                        <th style={{ width: "30%" }}> E-Mail</th>
                        <th style={{ width: "20%" }}> Action</th>
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

        </>
    )
}