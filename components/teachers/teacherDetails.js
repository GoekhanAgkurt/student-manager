

export default function TeacherDetails({ teacher, onClose, }) {







    return (
        <div className="modalWindow">

            <div className="modalLeft" >
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
                    <button className="submitButton" type="button" >Edit</button>
                    <button className="cancelButton" type="button" >Delete</button>
                </div>
            </div>

            <div className="modalRight" onClick={() => setIsOpen(!isOpen)}>
            </div>

        </div>
    )
}