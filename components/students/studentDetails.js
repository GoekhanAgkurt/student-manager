import { useState } from "react"

export default function StudentDetails({ student, onClose, onDeleteStudent, onEditStudent }) {

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
            parentNumber: data.parentNumber,
        }

        onEditStudent(editedStudent);
        setIsEdit(false)
    }




    return (
        <div>

            {!isEdit ? (
                <div>
                    <span onClick={onClose}>✖️</span>
                    <form>

                        <h2>Please fill the form</h2>

                        <section>
                            <div>
                                <label>Name</label>
                                <p>{student.name}</p>
                            </div>

                            <div>
                                <label>Second Name</label>
                                <p>{student.secondName}</p>
                            </div>

                            <div>
                                <label>sex</label>
                                <p>{student.sex}</p>
                            </div>

                            <div>
                                <label>Birthday</label>
                                <p>{student.birthday}</p>
                            </div>

                            <div>
                                <label>Group</label>
                                <p>{student.group}</p>
                            </div>

                            <div>
                                <label >E-Mail</label>
                                <p>{student.email}</p>
                            </div>

                            <div>
                                <label>Phone</label>
                                <p>{student.email}</p>
                            </div>
                        </section>

                        <div>
                            <button type="button" onClick={() => setIsEdit(!isEdit)}>Edit</button>
                            <button type="button" onClick={handleDelete}>Delete</button>

                        </div>

                    </form>
                    <div onClick={() => setIsOpen(!isOpen)}>
                    </div>
                </div>
            ) : (

                <div>
                    <div>
                        <span onClick={() => setIsOpen(!isOpen)}>✖️</span>
                        <form onSubmit={editStudent}>

                            <h2>Please fill the form</h2>

                            <section>
                                <div>
                                    <label>Name</label>
                                    <input defaultValue={student.name} name="name" autoComplete="of"></input>
                                </div>

                                <div>
                                    <label>Second Name</label>
                                    <input defaultValue={student.name} name="secondName" autoComplete="of"></input>
                                </div>

                                <div>
                                    <label>sex</label>
                                    <select name="sex" defaultValue={student.sex}>
                                        <option value="masculine"> masculine</option>
                                        <option value="feminine">feminine </option>
                                    </select>
                                </div>

                                <div>
                                    <label>Birthday</label>
                                    <input type="date" placeholder="dd.mm.yyyy" name="birthday"></input>
                                </div>

                                <div>
                                    <label>Group</label>
                                    <select name="group">
                                        <option value="">Select a group</option>
                                        <option>JavaScript</option>
                                        <option>Java</option>
                                        <option>Python</option>
                                    </select>

                                </div>

                                <div>
                                    <label >E-Mail</label>
                                    <input type="mail" defaultValue={student.birthday} name="email" autoComplete="of"></input>
                                </div>

                                <div>
                                    <label>Phone</label>
                                    <input type="phone" defaultValue={student.phone} name="phone" autoComplete="of"></input>
                                </div>
                            </section>

                            <div>
                                <button type="submit">Save Changes</button>
                                <button type="button" onClick={() => setIsEdit(!isEdit)}>Cancel</button>
                            </div>

                        </form>
                    </div>
                    <div onClick={() => setIsOpen(!isOpen)}>
                    </div>
                </div>
            )}

        </div>
    )
}