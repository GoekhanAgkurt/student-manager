

export default function GroupItem({ group }) {

    return (
        <>
            <tr>
                <td> {group.groupName}</td>
                <td>  {group.classRoom}</td>
                <td>  {group.id}</td>
                <td>   {group.teacherName}</td>
                <td>   </td>
                <td><button>details</button></td>
            </tr>

        </>
    );
}