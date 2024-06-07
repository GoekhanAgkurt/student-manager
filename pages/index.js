import CreateGroup from "@/components/groups/createGroup";
import GroupList from "@/components/groups/groupList";
import CreateStudent from "@/components/students/createStudent";
import StudentList from "@/components/students/studentsList";
import TabBar from "@/components/tabBar";
import CreateTeacher from "@/components/teachers/createTeachers";
import TeacherList from "@/components/teachers/teacherList";
import { useState, useEffect } from "react";
import SearchBar from "@/components/searchBar";
import Header from "@/components/header";

export default function HomePage({
  students, onAddStudent, onDeleteStudent, onEditStudent, groups, onAddGroup, onEditGroup, onDeleteGroup, teachers, onAddTeacher, onDeleteTeacher, onEditTeacher,
}) {

  const [foundStudent, setFoundStudent] = useState(students);
  const [foundGroup, setFoundGroup] = useState(groups);
  const [foundTeacher, setFoundTeacher] = useState(teachers)

  const [isActiveTab, setIsActiveTab] = useState("students")



  const handleSearchStudents = (results) => {
    setFoundStudent(results);
  };

  const handleSearchGroups = (results) => {
    setFoundGroup(results);
  };

  const handleSearchTeachers = (results) => {
    setFoundTeacher(results);
  };

  useEffect(() => {
    setFoundStudent(students);
  }, [students]);


  useEffect(() => {
    setFoundGroup(groups);
  }, [groups]);

  useEffect(() => {
    setFoundTeacher(teachers);
  }, [teachers]);


  return (
    <div>

      <Header />

      <TabBar activeTab={isActiveTab} setActiveTab={setIsActiveTab} students={students} groups={groups} teachers={teachers} />

      {isActiveTab === "students" && (
        <>
          <div style={{ width: "97%", margin: "auto", display: "flex", margin: " 0px auto", minWidth: "900px" }}>

            <CreateStudent onAddStudent={onAddStudent} groups={groups} />
            <SearchBar data={students} onSearch={handleSearchStudents} placeholder="Search by first name, second name or ID" />
          </div>
          <StudentList students={foundStudent} onDeleteStudent={onDeleteStudent} onEditStudent={onEditStudent} groups={groups} />
        </>
      )}


      {isActiveTab === "groups" && (
        <>
          <div style={{ width: "97%", margin: "auto", display: "flex", margin: " 0 auto", minWidth: "900px" }}>
            <CreateGroup onAddGroup={onAddGroup} teachers={teachers} />
            <SearchBar data={groups} onSearch={handleSearchGroups} placeholder="Search by group name or ID" />

          </div>
          <GroupList groups={foundGroup} onEditGroup={onEditGroup} onDeleteGroup={onDeleteGroup} teachers={teachers} students={students} />
        </>
      )
      }

      {isActiveTab === "teachers" && (
        <>
          <div style={{ width: "97%", margin: "auto", display: "flex", margin: " 0 auto", minWidth: "900px" }}>
            <CreateTeacher onAddTeacher={onAddTeacher} groups={groups} />
            <SearchBar data={teachers} onSearch={handleSearchTeachers} placeholder="Search Teacher name, second name or ID" />

          </div>
          <TeacherList teachers={foundTeacher} onDeleteTeacher={onDeleteTeacher} onEditTeacher={onEditTeacher} groups={groups} />
        </>
      )
      }
    </div>
  )


}
