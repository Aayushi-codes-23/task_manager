import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")  // Ye tera backend ka address hai
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <p>{message}</p> {/* Backend se message show hoga */}
    </div>
  );
}

export default App;
