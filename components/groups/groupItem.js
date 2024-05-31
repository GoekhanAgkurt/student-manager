import { useState } from "react";
import DetailsGroup from "./groupDetails";

export default function GroupItem({ group, groups, onEditGroup, onDeleteGroup }) {

    const [detailIsOpen, setDetailIsOpen] = useState(false);

    const closeDetails = () => {
        setDetailIsOpen(false);
    }

    return (
        <>
            <tr>
                <td> {group.groupName}</td>
                <td>  {group.classRoom}</td>
                <td>  {group.id}</td>
                <td>   {group.teacherName}</td>
                <td>   </td>
                <td><button className="detailsButton" onClick={() => setDetailIsOpen(!detailIsOpen)}>details</button></td>
            </tr>

            {detailIsOpen && (
                <DetailsGroup group={group} groups={groups} onEditGroup={onEditGroup} onClose={closeDetails} onDeleteGroup={onDeleteGroup} />
            )
            }

        </>
    );
}