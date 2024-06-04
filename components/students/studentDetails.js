import { useState } from "react"


export default function StudentDetails({ student, onClose, onDeleteStudent, onEditStudent, groups }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);


    const handleDelete = () => {
        onDeleteStudent(student.id);
        onClose();
    }

    function editStudent(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const editedStudent = {
            id: student.id,
            name: data.name,
            secondName: data.secondName,
            birthday: data.birthday,
            group: data.group,
            sex: data.sex,
            email: data.email,
            phone: data.phone,
        }
        onEditStudent(editedStudent);
        setIsEdit(false)
    }


    return (
        <div className="modalWindow">

            {!isEdit ? (
                <div className="modalLeft" >
                    <span className="closeIcon" onClick={onClose}>✖️</span>

                    <h2>Please fill the form</h2>

                    <section className="formWrapper">
                        <div className="formBox">
                            <label>Name</label>
                            <p>{student.name}</p>
                        </div>

                        <div className="formBox">
                            <label>Second Name</label>
                            <p>{student.secondName}</p>
                        </div>

                        <div className="formBox">
                            <label>sex</label>
                            <p>{student.sex}</p>
                        </div>

                        <div className="formBox">
                            <label>Birthday</label>
                            <p>{student.birthday}</p>
                        </div>

                        <div className="formBox">
                            <label>Group</label>
                            <p>{student.group}</p>
                        </div>

                        <div className="formBox">
                            <label >E-Mail</label>
                            <p>{student.email}</p>
                        </div>

                        <div className="formBox">
                            <label>Phone</label>
                            <p>{student.phone}</p>
                        </div>
                    </section>

                    <div className="buttonBox">
                        <button className="submitButton" type="button" onClick={() => setIsEdit(!isEdit)}>Edit</button>
                        <button className="deleteButton" type="button" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            ) : (

                <div className="modalLeft">
                    <span className="closeIcon" onClick={() => setIsEdit(!isEdit)}>✖️</span>
                    <form onSubmit={editStudent}>

                        <h2>Please fill the form</h2>

                        <section className="formWrapper">
                            <div className="formBox">
                                <label>Name</label>
                                <input defaultValue={student.name} name="name" autoComplete="of" />
                            </div>

                            <div className="formBox">
                                <label>Second Name</label>
                                <input defaultValue={student.secondName} name="secondName" autoComplete="of" />
                            </div>

                            <div className="formBox">
                                <label>sex</label>
                                <select name="sex" defaultValue={student.sex}>
                                    <option value="masculine"> masculine</option>
                                    <option value="feminine">feminine </option>
                                </select>
                            </div>

                            <div className="formBox">
                                <label>Birthday</label>
                                <input type="date" defaultValue={student.birthday} name="birthday" autoComplete="of" />
                            </div>

                            <div className="formBox">
                                <label>Group</label>
                                <select name="group">
                                    <option>{student.group}</option>
                                    {groups.map((group) => (
                                        <option>{group.groupName}</option>
                                    ))}

                                </select>
                            </div>

                            <div className="formBox">
                                <label >E-Mail</label>
                                <input type="mail" defaultValue={student.birthday} name="email" autoComplete="of" />
                            </div>

                            <div className="formBox">
                                <label>Phone</label>
                                <input type="phone" defaultValue={student.phone} name="phone" />

                            </div>
                        </section>

                        <div className="buttonBox">
                            <button type="submit" className="submitButton">Save Changes</button>
                            <button type="button" className="cancelButton" onClick={() => setIsEdit(!isEdit)}>Cancel</button>
                        </div>

                    </form>
                </div>
            )}

            <div className="modalRight" onClick={() => setIsOpen(!isOpen)}>
            </div>

        </div>
    )
}