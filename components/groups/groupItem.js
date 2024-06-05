import { useState } from "react";
import DetailsGroup from "./groupDetails";

export default function GroupItem({ group, groups, onEditGroup, onDeleteGroup, teachers, students }) {

    const [detailIsOpen, setDetailIsOpen] = useState(false);

    const closeDetails = () => {
        setDetailIsOpen(false);
    }

    const groupStudents = students.filter((student) => (student.group === group.groupName))
    const teacher = teachers.find(teacher => teacher.name === group.teacherName);

    return (
        <>
            <tr>
                <td> {group.groupName}</td>
                <td>  {group.classRoom}</td>
                <td>  {group.id}</td>
                <td>{teacher ? `${teacher.name} ${teacher.secondName}` : group.teacherName}</td>
                <td>  {groupStudents.length} </td>
                <td><button className="detailsButton" onClick={() => setDetailIsOpen(!detailIsOpen)}>details</button></td>
            </tr>

            {detailIsOpen && (
                <DetailsGroup
                    key={group.id}
                    group={group} groups={groups}
                    onEditGroup={onEditGroup}
                    onClose={closeDetails}
                    onDeleteGroup={onDeleteGroup}
                    teachers={teachers} students={students}
                    groupStudents={groupStudents}
                />
            )
            }

        </>
    );
}