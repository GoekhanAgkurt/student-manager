import { useState } from "react"

export default function StudentDetails({ student, onClose, onDeleteStudent }) {

    const [isOpen, setIsOpen] = useState(false);


    const handleDelete = () => {
        onDeleteStudent(student.id);
        onClose();
    }


    return (
        <div>
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
                        <button type="button" onClick={onClose}>Cancel</button>
                        <button type="button" onClick={handleDelete}>Delete</button>

                    </div>

                </form>
            </div>
            <div onClick={() => setIsOpen(!isOpen)}>
            </div>
        </div>
    )
}