import CreateStudent from "@/components/students/createStudent";
import StudentList from "@/components/students/studentsList";

export default function HomePage({ students, onAddStudent }) {
  return (
    <div>
      <h1>Hello from Next.js</h1>

      <CreateStudent onAddStudent={onAddStudent} />

      <StudentList students={students} />

    </div>
  );
}
