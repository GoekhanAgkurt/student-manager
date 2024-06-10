import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import StudentDetails from "./studentDetails";


export default function CreateStudent({ onAddStudent, groups }) {

    const [isOpen, setIsOpen] = useState(false);


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
        }
        onAddStudent(newStudent);
        setIsOpen(false);
    }

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="createButton">add Student</button>

            {isOpen && (

                <div className="modalWindow" >
                    <div className="modalLeft">
                        <span className="closeIcon" onClick={() => setIsOpen(!isOpen)}>✖️</span>
                        <form className="styles.createForm" onSubmit={addStudent}>

                            <h2>Fill the form to create a new Student</h2>

                            <section className="formWrapper">
                                <div className="formBox">
                                    <label>Name</label>
                                    <input placeholder="Max" name="name" autoComplete="of"></input>
                                </div>

                                <div className="formBox">
                                    <label>Second Name</label>
                                    <input placeholder="Mustermann" name="secondName" autoComplete="of"></input>
                                </div>

                                <div className="formBox">
                                    <label>sex</label>
                                    <select>
                                        <option>no information</option>
                                        <option>male</option>
                                        <option>female</option>
                                    </select>
                                </div>

                                <div className="formBox">
                                    <label>Birthday</label>
                                    <input type="date" placeholder="dd.mm.yyyy" name="birthday"></input>
                                </div>

                                <div className="formBox">
                                    <label>Group</label>
                                    <select name="group" defaultValue="">
                                        <option value="" disabled>Select a Group</option>
                                        {groups.map((group, index) => (
                                            <option key={index} value={group.name}>
                                                {group.groupName}
                                            </option>
                                        ))}

                                    </select>

                                </div>

                                <div className="formBox">
                                    <label >E-Mail</label>
                                    <input type="mail" placeholder="max@example.de" name="email" autoComplete="of"></input>
                                </div>

                                <div className="formBox">
                                    <label>Phone</label>
                                    <input type="phone" placeholder="0176 11 22 33" name="phone" autoComplete="of"></input>
                                </div>
                            </section>

                            <div className="buttonBox">
                                <button className="submitButton" type="submit">Submit</button>
                                <button className="cancelButton" type="button" onClick={() => setIsOpen(!isOpen)}>Cancel</button>
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