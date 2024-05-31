import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



export default function CreateGroup({ onAddGroup }) {

    const [createIsOpen, setCreateIsOpen] = useState(false);

    function addGroup(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const newGroup = {
            id: uuidv4(),
            groupName: data.groupName,
            classRoom: data.classRoom,
            teacherName: data.teacherName,
            teacherNumber: data.teacherNumber,
        }
        onAddGroup(newGroup);
        setCreateIsOpen(false);
    }

    function cancelAddGroup() {
        setCreateIsOpen(false);
    }


    return (

        <div >
            <button className="createButton" onClick={() => setCreateIsOpen(!createIsOpen)}>{!createIsOpen ? "+ add Group" : "cancel"}</button>

            {createIsOpen && (

                <div className="modalWindow">
                    <div className="modalLeft">
                        <span onClick={() => setCreateIsOpen(!createIsOpen)} className="closeIcon" >✖️</span>
                        <form className="createForm" onSubmit={addGroup}>

                            <h2>Please fill the form</h2>

                            <section className="formWrapper">
                                <div className="formBox">
                                    <label>Group Name</label>
                                    <input placeholder="Musiktruppe" name="groupName"></input>
                                </div>

                                <div className="formBox">
                                    <label>Classrom</label>
                                    <input placeholder="Class 2b" name="classRoom"></input>
                                </div>

                                <div className="formBox">
                                    <label>Teacher</label>
                                    <input placeholder="dd.mm.yyyy" name="teacherName"></input>
                                </div>


                                <div className="formBox">
                                    <label>Teacher Number</label>
                                    <input placeholder="123 44 55 66" name="teacherNumber"></input>
                                </div>
                            </section>

                            <div className="buttonBox">
                                <button className="submitButton" type="submit">Submit</button>
                                <button className="cancelButton" type="button" onClick={cancelAddGroup}>Cancel</button>
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


