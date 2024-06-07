import GroupItem from "./groupItem";

export default function GroupList({ groups, onEditGroup, onDeleteGroup, teachers, students }) {
    return (
        <table>
            <thead>
                <tr>
                    <th style={{ width: "17%" }}>Group Name</th>
                    <th style={{ width: "13%" }}>Classroom</th>
                    <th style={{ width: "37%" }}>Group Id</th>
                    <th style={{ width: "20%" }}>Start</th>
                    <th style={{ width: "20%" }}>Teacher</th>
                    <th style={{ width: "10%" }}>Student</th>
                    <th style={{ width: "17%" }}>Active</th>
                    <th style={{ width: "20%" }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {groups.map((group) => (
                    <GroupItem
                        group={group}
                        key={group.id}
                        groups={groups}
                        onEditGroup={onEditGroup}
                        onDeleteGroup={onDeleteGroup}
                        teachers={teachers}
                        students={students}
                    />
                ))}
            </tbody>
        </table>

    )
}