document.getElementById("source").addEventListener("change", function () {
  const source = this.value;
  document.getElementById("clickhouse-config").style.display = source === "clickhouse" ? "block" : "none";
  document.getElementById("flatfile-config").style.display = source === "flatfile" ? "block" : "none";
});

function connect() {
  const source = document.getElementById("source").value;
  document.getElementById("status").innerText = "Connecting...";

  // Simulate loading columns
  setTimeout(() => {
    document.getElementById("status").innerText = "Connected! Columns loaded.";
    document.getElementById("columnSelection").classList.remove("hidden");

    const columns = ["id", "name", "price", "created_at"]; // dummy
    const columnDiv = document.getElementById("columns");
    columnDiv.innerHTML = "";

    columns.forEach(col => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = col;
      checkbox.id = col;

      const label = document.createElement("label");
      label.htmlFor = col;
      label.innerText = col;

      columnDiv.appendChild(checkbox);
      columnDiv.appendChild(label);
      columnDiv.appendChild(document.createElement("br"));
    });
  }, 1000);
}

function startIngestion() {
  const selectedColumns = Array.from(document.querySelectorAll("#columns input:checked"))
    .map(el => el.value);

  if (selectedColumns.length === 0) {
    alert("Select at least one column!");
    return;
  }

  document.getElementById("status").innerText = "Ingestion started...";

  // Simulate ingestion process
  setTimeout(() => {
    document.getElementById("status").innerText = "Ingestion completed!";
    document.getElementById("result").innerText = "Total records processed: 1,234 (dummy)";
  }, 2000);

  // Gather connection data
  const source = document.getElementById("source").value;
  let requestData = {};

  if (source === "clickhouse") {
    requestData = {
      hostname: document.getElementById("host").value,
      username: document.getElementById("user").value,
      password: document.getElementById("jwtToken").value  // assuming JWT as password field
    };
    
  } else if (source === "flatfile") {
    requestData = {
      delimiter: document.getElementById("delimiter").value,
      fileName: document.getElementById("flatfile").files[0]?.name || "no_file_selected.csv"
      // Note: actual file upload handling would require FormData and backend support
    };
  }

  // Send request to backend
  fetch('http://localhost:8080/api/connection-requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })
    .then(response => {
      if (!response.ok) throw new Error("Failed to connect.");
      return response.json();
    })
    .then(data => console.log("Server response:", data))
    .catch(error => console.error("Error:", error));
}
