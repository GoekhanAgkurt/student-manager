import GlobalStyle from "../styles";


import useLocalStorageState from "use-local-storage-state";
import { initialStudents, initialGroups, initialTeachers } from "@/lib/data";

export default function App({ Component, pageProps }) {

  const [students, setStudents] = useLocalStorageState("students", { defaultValue: initialStudents });
  const [groups, setGroups] = useLocalStorageState("groups", { defaultValue: initialGroups });
  const [teachers, setTeachers] = useLocalStorageState("teachers", { defaultValue: initialTeachers });



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

  function handleAddGroup(newGroup) {
    setGroups([...groups, newGroup])
  }

  function handleDeleteGroup(id) {
    setGroups((groups.filter((group) => (group.id !== id)
    )))
  }

  function handleEditGroup(edidetGroup) {
    setGroups((groups.map((group) => (
      group.id === edidetGroup.id ? edidetGroup : group
    ))))
  }

  function handleAddTeacher(newTeacher) {
    setTeachers([...teachers, newTeacher])
  }

  function handleDeleteTeacher(id) {
    setTeachers(teachers.filter((teacher) => teacher.id !== id))
  }

  function handleEditTeacher(editedTeacher) {
    setTeachers(teachers.map((teacher) => (
      teacher.id === editedTeacher.id ? editedTeacher : teacher
    )))
  }


  return (
    <>
      <GlobalStyle />
      <Component {...pageProps}
        students={students}
        onAddStudent={handleAddStudent}
        onDeleteStudent={handleDeleteStudent}
        onEditStudent={handleEditStudent}

        groups={groups}
        onAddGroup={handleAddGroup}
        onEditGroup={handleEditGroup}
        onDeleteGroup={handleDeleteGroup}

        teachers={teachers}
        onAddTeacher={handleAddTeacher}
        onDeleteTeacher={handleDeleteTeacher}
        onEditTeacher={handleEditTeacher}
      />
    </>
  );
}
