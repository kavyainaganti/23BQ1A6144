import { useState } from "react";

function App() {
  const notifications = [
    {
      id: 1,
      category: "Events",
      priority: "HIGH",
      status: "NEW",
      timestamp: "2026-06-05T10:30:00Z",
      notification: "Annual Tech Fest Registration Open",
      message: "Students can register for the annual tech fest."
    },
    {
      id: 2,
      category: "Results",
      priority: "MEDIUM",
      status: "VIEWED",
      timestamp: "2026-06-05T11:00:00Z",
      notification: "Semester Results Published",
      message: "Results are available in the student portal."
    },
    {
      id: 3,
      category: "Placements",
      priority: "HIGH",
      status: "NEW",
      timestamp: "2026-06-05T12:00:00Z",
      notification: "Infosys Campus Drive",
      message: "Eligible students can apply before the deadline."
    }
  ];

  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? notifications
      : notifications.filter((n) => n.category === filter);

  const getColor = (priority) => {
    if (priority === "HIGH") return "red";
    if (priority === "MEDIUM") return "orange";
    return "green";
  };

  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
      <h1>Campus Notification Center</h1>

      <button onClick={() => setFilter("All")}>All</button>{" "}
      <button onClick={() => setFilter("Events")}>Events</button>{" "}
      <button onClick={() => setFilter("Results")}>Results</button>{" "}
      <button onClick={() => setFilter("Placements")}>Placements</button>

      <br /><br />

      {filtered.map((item) => (
        <div
          key={item.id}
          style={{
            borderLeft: `6px solid ${getColor(item.priority)}`,
            background: "#f5f5f5",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>{item.notification}</h3>

          <p><strong>Category:</strong> {item.category}</p>
          <p><strong>Priority:</strong> {item.priority}</p>

          <p>
            <strong>Status:</strong>{" "}
            {item.status === "NEW" ? "NEW 🔵" : "VIEWED ⚪"}
          </p>

          <p><strong>Timestamp:</strong> {item.timestamp}</p>
          <p><strong>Message:</strong> {item.message}</p>
        </div>
      ))}
    </div>
  );
}

export default App;