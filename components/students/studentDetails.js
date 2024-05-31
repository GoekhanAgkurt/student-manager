import { useState } from "react"

export default function StudentDetails({ student, onClose }) {

    const [isOpen, setIsOpen] = useState(false);



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
                    </div>

                </form>
            </div>
            <div onClick={() => setIsOpen(!isOpen)}>
            </div>
        </div>
    )
}