function App() {
  const notifications = [
    {
      id: 1,
      type: "HIGH",
      timestamp: "2026-06-05T10:30:00Z",
      notification: "Exam Hall Tickets Released",
      message: "Students can now download hall tickets from the portal.",
    },
    {
      id: 2,
      type: "MEDIUM",
      timestamp: "2026-06-05T11:00:00Z",
      notification: "Workshop Registration Open",
      message: "Register before Friday to reserve your seat.",
    },
    {
      id: 3,
      type: "LOW",
      timestamp: "2026-06-05T12:00:00Z",
      notification: "Library Timings Updated",
      message: "Library will remain open until 8 PM.",
    },
  ];

  const getColor = (type) => {
    switch (type) {
      case "HIGH":
        return "red";
      case "MEDIUM":
        return "orange";
      case "LOW":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1>Campus Notification Application</h1>

      {notifications.map((item) => (
        <div
          key={item.id}
          style={{
            borderLeft: `6px solid ${getColor(item.type)}`,
            backgroundColor: "#f5f5f5",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{item.notification}</h3>

          <p>
            <strong>ID:</strong> {item.id}
          </p>

          <p>
            <strong>Type:</strong> {item.type}
          </p>

          <p>
            <strong>Timestamp:</strong> {item.timestamp}
          </p>

          <p>
            <strong>Message:</strong> {item.message}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;