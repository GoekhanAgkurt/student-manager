import CreateGroup from "@/components/groups/createGroup";
import GroupList from "@/components/groups/groupList";
import CreateStudent from "@/components/students/createStudent";
import StudentList from "@/components/students/studentsList";
import TabBar from "@/components/tabBar";
import CreateTeacher from "@/components/teachers/createTeachers";
import TeacherList from "@/components/teachers/teacherList";
import { useState } from "react";

export default function HomePage({
  students, onAddStudent, onDeleteStudent, onEditStudent, groups, onAddGroup, onEditGroup, onDeleteGroup, teachers, onAddTeacher, onDeleteTeacher, onEditTeacher,
}) {


  const [isActiveTab, setIsActiveTab] = useState("students")

  return (
    <div>

      <TabBar activeTab={isActiveTab} setActiveTab={setIsActiveTab} students={students} groups={groups} teachers={teachers} />

      {isActiveTab === "students" && (
        <>
          <div style={{ width: "97%", margin: "auto", display: "flex", margin: " 0px auto" }}>

            <CreateStudent onAddStudent={onAddStudent} groups={groups} />
          </div>
          <StudentList students={students} onDeleteStudent={onDeleteStudent} onEditStudent={onEditStudent} groups={groups} />
        </>
      )}


      {isActiveTab === "groups" && (
        <>
          <div style={{ width: "97%", margin: "auto", display: "flex", margin: " 0 auto" }}>
            <CreateGroup onAddGroup={onAddGroup} teachers={teachers} />
          </div>
          <GroupList groups={groups} onEditGroup={onEditGroup} onDeleteGroup={onDeleteGroup} teachers={teachers} students={students} />
        </>
      )
      }

      {isActiveTab === "teachers" && (
        <>
          <div style={{ width: "97%", margin: "auto", display: "flex", margin: " 0 auto" }}>
            <CreateTeacher onAddTeacher={onAddTeacher} groups={groups} />
          </div>
          <TeacherList teachers={teachers} onDeleteTeacher={onDeleteTeacher} onEditTeacher={onEditTeacher} groups={groups} />
        </>
      )
      }
    </div>
  )


}
