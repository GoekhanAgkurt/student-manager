import CreateGroup from "@/components/groups/addGroup";
import GroupList from "@/components/groups/groupList";
import CreateStudent from "@/components/students/createStudent";
import StudentList from "@/components/students/studentsList";

export default function HomePage({ students, onAddStudent, onDeleteStudent, onEditStudent, groups, onAddGroup }) {
  return (
    <div>
      <h1>Hello from Next.js</h1>

      <div style={{ width: "97%", margin: "auto", display: "flex", margin: " 0 auto" }}>

        <CreateStudent onAddStudent={onAddStudent} />
      </div>
      <StudentList students={students} onDeleteStudent={onDeleteStudent} onEditStudent={onEditStudent} />


      <div style={{ width: "97%", margin: "auto", display: "flex", margin: " 0 auto" }}>
        <CreateGroup onAddGroup={onAddGroup} />
      </div>
      <GroupList groups={groups} />



    </div>
  );
}
