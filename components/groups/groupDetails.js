import { useState } from "react";


export default function DetailsGroup({ group, onClose, onDeleteGroup, onEditGroup, groups, teachers, students, groupStudents }) {
    const [isEdit, setIsEdit] = useState(false);




    const deleteGroup = () => {
        onDeleteGroup(group.id);
        onClose();
    };

    const editGroup = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const editedGroup = {
            id: group.id,
            groupName: data.groupName,
            classRoom: data.classRoom,
            teacherName: data.teacherName,
            teacherNumber: data.teacherNumber,
        };

        onEditGroup(editedGroup);
        setIsEdit(false);
    };


    return (
        <div className="modalWindow" onClick={(e) => e.stopPropagation()}>
            {!isEdit ? (
                <div className="modalLeft">
                    <span className="closeIcon" onClick={onClose}>✖️</span>
                    <h2>Detailspage Group</h2>

                    <div className="styles.formBox">
                        <label id="id">Group ID:</label>
                        <p>{group.id}</p>
                    </div>

                    <section className="formWrapper">
                        <div className="formBox">
                            <label id="groupName">Group</label>
                            <p>{group.groupName}</p>
                        </div>

                        <div className="formBox">
                            <label id="classRoom">Classroom</label>
                            <p>{group.classRoom}</p>
                        </div>

                        <div className="formBox">
                            <label id="teacherName">Teacher</label>
                            <p>{group.teacherName}</p>
                        </div>

                        <div className="formBox">
                            <label id="student">Number of Student({groupStudents.length})</label>
                            <p>{groupStudents.map((student) => (
                                <li key={student.id} id="student">{student.name}, {student.secondName}</li>
                            ))}</p>

                        </div>
                    </section>

                    <div className="buttonBox">
                        <button className="editButton" onClick={() => setIsEdit(!isEdit)}>Edit</button>
                        <button className="deleteButton" onClick={deleteGroup}>🗑️ delete</button>
                    </div>
                </div>
            ) : (
                <div className="modalLeft">
                    <span className="closeIcon" onClick={onClose}>✖️</span>

                    <form onSubmit={editGroup}>
                        <h2>Edit Group Detailspage </h2>

                        <section className="formWrapper">
                            <div className="formBox">
                                <label id="groupName">Group</label>
                                <select id="groupName" name="groupName" defaultValue={group.groupName}>
                                    {groups.map((group, index) => (
                                        <option key={index} value={group.groupName}>
                                            {group.groupName}
                                        </option>
                                    ))}
                                </select>

                            </div>

                            <div className="formBox">
                                <label id="classRoom">Class</label>
                                <input id="classRoom" defaultValue={group.classRoom} name="classRoom" />
                            </div>

                            <div className="formBox">
                                <label id="teacher">Teacher </label>
                                <select id="teacherName" name="teacherName" defaultValue={group.teacherName}>
                                    {teachers.map((teacher, index) => (
                                        <option key={index} value={teacher.name}>
                                            {teacher.name}, {teacher.secondName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="formBox">
                                <label id="teacherNumber">Phone</label>
                                <input id="teacherNumber" defaultValue={group.teacherNumber} name="teacherNumber" />
                            </div>
                        </section>

                        <div className="buttonBox">
                            <button className="submitButton" type="submit">Submit changes</button>
                            <button className="cancelButton" type="button" onClick={() => setIsEdit(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
