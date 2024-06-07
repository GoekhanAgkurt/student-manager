
export default function TabBar({ activeTab, setActiveTab, groups, students, teachers }) {
    return (
        <div style={{ width: "97%", margin: "40px auto 40px", display: "flex", justifyContent: "space-between", minWidth: "900px", }}>


            <button onClick={() => setActiveTab("students")} style={{
                width: "33.4%", background: "none",
                borderBottom: activeTab === "students" ? "4px solid darksLategray" : "4px solid lightGray", borderRadius: "0",
                color: activeTab === "students" ? " darksLategray" : "black",
            }}> <h3>Students({students.length})</h3> </button>


            <button onClick={() => setActiveTab("groups")} style={{
                width: "33.4%", background: "none",
                borderBottom: activeTab === "groups" ? "4px solid darksLategray" : "4px solid lightGray", borderRadius: "0",
                color: activeTab === "groups" ? " darksLategray" : "black",
            }}><h3>Groups({groups.length})</h3></button>


            <button onClick={() => setActiveTab("teachers")} style={{
                width: "33.4%", background: "none",
                borderBottom: activeTab === "teachers" ? "4px solid darksLategray" : "4px solid lightGray", borderRadius: "0",
                color: activeTab === "teachers" ? " darksLategray" : "black",

            }}><h3>Teachers({teachers.length}) </h3></button>
        </div>
    );
}