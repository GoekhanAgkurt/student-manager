export default function StudentItem({ student }) {

    return (
        <>
            <tr>
                <th> {student.name}</th>
                <th>  {student.secondName}</th>
                <th>  {student.id}</th>
                <th>   {student.birthday}</th>
                <th>   {student.group}</th>
                <th>   {student.sex}</th>
                <th>{student.email}</th>
                <th>   {student.phone}</th>
                <th>details</th>
            </tr>
        </>
    )
}