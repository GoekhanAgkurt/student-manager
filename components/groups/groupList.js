import GroupItem from "./groupItem";

export default function GroupList({ groups }) {
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
                    />
                ))}
            </tbody>
        </table>

    )
}