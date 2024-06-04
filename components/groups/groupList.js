import GroupItem from "./groupItem";

export default function GroupList({ groups, onEditGroup, onDeleteGroup, teachers, students }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Group Name</th>
                    <th>Classroom</th>
                    <th>Group Id</th>
                    <th>Teacher</th>
                    <th>Number</th>
                    <th>Action</th>
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