import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ToastMessage from "../toastMessage";

export default function CreateStudent({ onAddStudent, groups }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showToast, setShowToast] = useState(false);

    function addStudent(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const newStudent = {
            id: uuidv4(),
            name: data.name,
            secondName: data.secondName,
            birthday: data.birthday,
            group: data.group,
            sex: data.sex,
            email: data.email,
            phone: data.phone,
        };
        onAddStudent(newStudent);
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="createButton">Add Student</button>

            {isOpen && (
                <div className="modalWindow">
                    <div className="modalLeft">
                        <span className="closeIcon" onClick={() => setIsOpen(!isOpen)}>✖️</span>
                        <form className="styles.createForm" onSubmit={addStudent}>
                            <h2>Fill the form to create a new Student</h2>
                            <section className="formWrapper">
                                <div className="formBox">
                                    <label>Name</label>
                                    <input placeholder="Max" name="name" autoComplete="off" />
                                </div>
                                <div className="formBox">
                                    <label>Second Name</label>
                                    <input placeholder="Mustermann" name="secondName" autoComplete="off" />
                                </div>
                                <div className="formBox">
                                    <label>Sex</label>
                                    <select name="sex">
                                        <option value="">no information</option>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                    </select>
                                </div>
                                <div className="formBox">
                                    <label>Birthday</label>
                                    <input type="date" name="birthday" />
                                </div>
                                <div className="formBox">
                                    <label>Group</label>
                                    <select name="group" defaultValue="">
                                        <option value="" disabled>Select a Group</option>
                                        {groups.map((group, index) => (
                                            <option key={index} value={group.groupName}>
                                                {group.groupName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="formBox">
                                    <label>Email</label>
                                    <input type="email" placeholder="max@example.de" name="email" autoComplete="off" />
                                </div>
                                <div className="formBox">
                                    <label>Phone</label>
                                    <input type="phone" placeholder="0176 11 22 33" name="phone" autoComplete="off" />
                                </div>
                            </section>
                            <div className="buttonBox">
                                <button className="submitButton" type="submit">Submit</button>
                                <button className="cancelButton" type="button" onClick={() => setIsOpen(!isOpen)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
