import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



export default function CreateGroup({ onAddGroup, teachers }) {

    const [createIsOpen, setCreateIsOpen] = useState(false);

    function addGroup(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const startDate = new Date(data.startDate);
        const currentDate = new Date();
        let formattedDate = data.startDate;
        let isActive = true;


        if (startDate < currentDate) {
            formattedDate = `since ${data.startDate}​`;
            isActive = true;

        } else {
            formattedDate = `on ${data.startDate}`;
            isActive = false;

        }

        const newGroup = {
            id: uuidv4(),
            groupName: data.groupName,
            classRoom: data.classRoom,
            startDate: formattedDate, // Verwenden Sie das formatierte Datum
            teacherName: data.teacherName,
            teacherNumber: data.teacherNumber,
            active: isActive ? "🟢" : "⏳"

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
                                    <input placeholder="Group Name" name="groupName"></input>
                                </div>

                                <div className="formBox">
                                    <label>Classrom</label>
                                    <input placeholder="Class 2b" name="classRoom"></input>
                                </div>

                                <div className="formBox">
                                    <label>Date of Start</label>
                                    <input type="date" placeholder="dd.mm.yyyy" name="startDate"></input>
                                </div>

                                <div className="formBox">
                                    <label>Teacher</label>
                                    <select name="teacherName" defaultValue="">
                                        <option value="" disabled>Select a Teacher</option>
                                        {teachers.map((teacher, index) => (
                                            <option key={index} value={teacher.name}>
                                                {teacher.name} {teacher.secondName}
                                            </option>
                                        ))}
                                    </select>
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


