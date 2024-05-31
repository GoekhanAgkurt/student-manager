import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function CreateStudent({ onAddStudent, }) {

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
        <div >
            <button onClick={() => setIsOpen(!isOpen)}>add Student</button>

            {isOpen && (

                <div>
                    <div>
                        <span onClick={() => setIsOpen(!isOpen)}>✖️</span>
                        <form className="styles.createForm" onSubmit={addStudent}>

                            <h2>Please fill the form</h2>

                            <section>
                                <div>
                                    <label>Name</label>
                                    <input placeholder="Max" name="name" autoComplete="of"></input>
                                </div>

                                <div>
                                    <label>Second Name</label>
                                    <input placeholder="Mustermann" name="secondName" autoComplete="of"></input>
                                </div>

                                <div>
                                    <label>sex</label>
                                    <select>
                                        <option>no info</option>
                                        <option>masculine</option>
                                        <option>feminine</option>
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
                                    <input type="mail" placeholder="max@example.de" name="email" autoComplete="of"></input>
                                </div>

                                <div>
                                    <label>Phone</label>
                                    <input type="phone" placeholder="0176 11 22 33" name="phone" autoComplete="of"></input>
                                </div>
                            </section>

                            <div>
                                <button type="submit">Submit</button>
                                <button type="button" onClick={() => setIsOpen(!isOpen)}>Cancel</button>
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