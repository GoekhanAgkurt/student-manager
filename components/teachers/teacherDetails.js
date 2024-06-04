import { useState } from "react";


export default function TeacherDetails({ teacher, onClose, onDeleteTeacher, onEditTeacher, groups }) {

    const [isEdit, setIsEdit] = useState(false);

    function handleDelete() {
        onDeleteTeacher(teacher.id);
        onClose();
    }

    function editTeacher(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const editedTeacher = {
            id: teacher.id,
            name: data.name,
            secondName: data.secondName,
            group: data.group,
            email: data.email,
            phone: data.phone,

        };

        onEditTeacher(editedTeacher);
        setIsEdit(false);
    };


    return (
        <div className="modalWindow">
            {!isEdit ? (
                <div className="modalLeft" onClick={(e) => e.stopPropagation()} >
                    <span className="closeIcon" onClick={onClose}>✖️</span>

                    <h2>Please fill the form</h2>

                    <section className="formWrapper">
                        <div className="formBox">
                            <label>Name</label>
                            <p>{teacher.name}</p>
                        </div>

                        <div className="formBox">
                            <label>Second Name</label>
                            <p>{teacher.secondName}</p>
                        </div>

                        <div className="formBox">
                            <label>Group</label>
                            <p>{teacher.group}</p>
                        </div>

                        <div className="formBox">
                            <label>E-Mail</label>
                            <p>{teacher.email}</p>
                        </div>

                        <div className="formBox">
                            <label>Phone</label>
                            <p>{teacher.phone}</p>
                        </div>
                    </section>

                    <div className="buttonBox">
                        <button className="submitButton" type="button" onClick={() => setIsEdit(!isEdit)}>Edit</button>
                        <button className="deleteButton" type="button" onClick={() => handleDelete(teacher.id)} >Delete</button>
                    </div>
                </div>

            ) : (

                <div className="modalLeft">
                    <span className="closeIcon" onClick={onClose}>✖️</span>

                    <form onSubmit={editTeacher}>
                        <h2>Edit Teacher Detailspage </h2>

                        <section className="formWrapper">
                            <div className="formBox">
                                <label>Teacher</label>
                                <input defaultValue={teacher.name} name="name" />
                            </div>

                            <div className="formBox">
                                <label>Second Name</label>
                                <input defaultValue={teacher.secondName} name="secondName" />
                            </div>

                            <div className="formBox">
                                <label>Group </label>
                                <select name="group">
                                    <option>{teacher.group}</option>
                                    {groups.map((group) => (
                                        <option>{group.groupName}</option>
                                    ))}

                                </select>                            </div>

                            <div className="formBox">
                                <label>E-Mail</label>
                                <input defaultValue={teacher.email} name="email" />
                            </div>

                            <div className="formBox">
                                <label>Phone</label>
                                <input defaultValue={teacher.phone} name="phone" />
                            </div>
                        </section>

                        <div className="buttonBox">
                            <button className="submitButton" type="submit">Submit changes</button>
                            <button className="cancelButton" type="button" onClick={() => setIsEdit(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="modalRight" onClick={() => setIsOpen(!isOpen)}>
            </div>

        </div>
    )
}