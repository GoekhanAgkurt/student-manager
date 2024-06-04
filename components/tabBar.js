
export default function TabBar({ activeTab, setActiveTab, groups, students, teachers }) {
    return (
        <div style={{ width: "97%", margin: "80px auto 40px", display: "flex", justifyContent: "space-between", }}>


            <button onClick={() => setActiveTab("students")} style={{
                width: "33.4%", background: "none",
                borderBottom: activeTab === "students" ? "4px solid darksLategray" : "4px solid lightGray", borderRadius: "0",
            }}> Students({students.length}) </button>


            <button onClick={() => setActiveTab("groups")} style={{
                width: "33.4%", background: "none",
                borderBottom: activeTab === "groups" ? "4px solid darksLategray" : "4px solid lightGray", borderRadius: "0",
            }}>Groups({groups.length})</button>


            <button onClick={() => setActiveTab("teachers")} style={{
                width: "33.4%", background: "none",
                borderBottom: activeTab === "teachers" ? "4px solid darksLategray" : "4px solid lightGray", borderRadius: "0",
            }}>Teachers({teachers.length}) </button>
        </div>
    );
}