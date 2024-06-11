import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { initialStudents, initialGroups, initialTeachers } from "@/lib/data";
import { useState } from "react";
import ToastMessage from "@/components/toastMessage";

export default function App({ Component, pageProps }) {

  const [students, setStudents] = useLocalStorageState("students", { defaultValue: initialStudents });
  const [groups, setGroups] = useLocalStorageState("groups", { defaultValue: initialGroups });
  const [teachers, setTeachers] = useLocalStorageState("teachers", { defaultValue: initialTeachers });

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");



  function handleAddStudent(newStudent) {
    setStudents([...students, newStudent])
    showToastMessage("Student successfully added!");


  }

  function handleDeleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id))
    showToastMessage("Student successfully deleted!");


  }

  function handleEditStudent(editedStudent) {
    setStudents(students.map((student) => (
      student.id === editedStudent.id ? editedStudent : student
    )))
    showToastMessage("Student successfully edited!");

  }

  function handleAddGroup(newGroup) {
    setGroups([...groups, newGroup])
    showToastMessage("Group successfully added!");


  }

  function handleDeleteGroup(id) {
    setGroups((groups.filter((group) => (group.id !== id)
    )))
    showToastMessage("Group successfully deleted!");

  }

  function handleEditGroup(edidetGroup) {
    setGroups((groups.map((group) => (
      group.id === edidetGroup.id ? edidetGroup : group
    ))))
    showToastMessage("Group successfully edited!");

  }

  function handleAddTeacher(newTeacher) {
    setTeachers([...teachers, newTeacher])
    showToastMessage("Teacher successfully added!");

  }

  function handleDeleteTeacher(id) {
    setTeachers(teachers.filter((teacher) => teacher.id !== id))
    showToastMessage("Student successfully deleted!");

  }

  function handleEditTeacher(editedTeacher) {
    setTeachers(teachers.map((teacher) => (
      teacher.id === editedTeacher.id ? editedTeacher : teacher
    )))
    showToastMessage("Student successfully edited!");

  }

  function showToastMessage(message) {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
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
      <ToastMessage
        message={toastMessage}
        show={showToast}
        onClose={() => setShowToast(false)} />
    </>
  );
}
