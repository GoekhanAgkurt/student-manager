import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';



export default function CreateTeacher({ onAddTeacher, groups }) {

    const [createIsOpen, setCreateIsOpen] = useState(false);

    function addTeacher(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const newTeacher = {
            id: uuidv4(),
            name: data.name,
            secondName: data.secondName,
            group: data.group,
            email: data.email,
            phone: data.phone,
        }

        onAddTeacher(newTeacher)
        setCreateIsOpen(false)
    }
    return (<div >
        <button className="createButton" onClick={() => setCreateIsOpen(!createIsOpen)}>{!createIsOpen ? "+ add Teacher" : "cancel"}</button>

        {createIsOpen && (
            <div className="modalWindow">
                <div className="modalLeft">
                    <span onClick={() => setCreateIsOpen(!createIsOpen)} className="closeIcon" style={{ float: "right" }} >✖️</span>
                    <form className="createForm" onSubmit={addTeacher}>

                        <h2>Please fill the form</h2>

                        <section className="formWrapper">
                            <div className="formBox">
                                <label>Name</label>
                                <input placeholder="Max" name="name"></input>
                            </div>

                            <div className="formBox">
                                <label>Nachname</label>
                                <input placeholder="Mustermann" name="secondName"></input>
                            </div>

                            <div className="formBox">
                                <label>Group</label>
                                <select name='group'>
                                    {groups.map((group) => (
                                        <option>{group.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="formBox">
                                <label>Email</label>
                                <input type="text" placeholder="max@mustermann.de" name="email"></input>
                            </div>

                            <div className="formBox">
                                <label>Phone</label>
                                <input type="tel" placeholder="0176 11 22 33" name="parentNumber" pattern="[0-9]*"></input>
                            </div>
                        </section>

                        <div className="buttonBox">
                            <button className="submitButton" type="submit">Submit</button>
                            <button className="cancelButton" type="button">Cancel</button>
                        </div>
                    </form>
                </div>
                <div className="modalRight" onClick={() => setCreateIsOpen(!createIsOpen)}>
                </div>
            </div>
        )}
    </div>
    )
}


