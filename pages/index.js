import StudentList from "@/components/students/studentsList";

export default function HomePage({ students }) {
  return (
    <div>
      <h1>Hello from Next.js</h1>

      <StudentList students={students} />

    </div>
  );
}
