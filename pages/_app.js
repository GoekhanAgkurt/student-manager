import GlobalStyle from "../styles";


import useLocalStorageState from "use-local-storage-state";
import { initialStudents } from "@/lib/data";

export default function App({ Component, pageProps }) {

  const [students, setStudents] = useLocalStorageState("students", { defaultValue: initialStudents });

  function handleAddStudent(newStudent) {
    setStudents([...students, newStudent])
  }

  function handleDeleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id))
  }

  function handleEditStudent(editedStudent) {
    setStudents(students.map((student) => (
      student.id === editedStudent.id ? editedStudent : student
    )))
  }


  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} students={students} onAddStudent={handleAddStudent} onDeleteStudent={handleDeleteStudent} onEditStudent={handleEditStudent} />
    </>
  );
}
