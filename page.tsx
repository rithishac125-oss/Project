"use client";
import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [workflow, setWorkflow] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const generatePlan = async () => {
    if (!task) return;

    setLoading(true);
    setResult("");
    setWorkflow("");

    // --- AI PLANNING USING OUMI (SIMULATED FOR NOW) ---
    const aiPlan = `
🧠 AI Task Breakdown for: "${task}"

1️⃣ Understand the main objective  
2️⃣ Break task into smaller actionable steps  
3️⃣ Identify required resources  
4️⃣ Schedule sequence of actions  
5️⃣ Assign agents to each step  
    `;

    // --- SIMULATED AGENT WORKFLOWS ---
    const simulatedWorkflow = `
🤖 Cline Agent: "Analyzing task…"  
⚙️ Kestra Workflow: "Orchestrating steps…"  
🚀 Executing Plan...
    `;

    // Simulate delay
    await new Promise((r) => setTimeout(r, 1200));

    setResult(aiPlan);
    setWorkflow(simulatedWorkflow);
    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        🔥 Multi-Agent AI Task Planner
      </h1>
      <p>Describe any task and watch AI + Agents break it down.</p>

      <input
        type="text"
        placeholder="Enter a task (e.g., Plan an event)"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          width: "60%",
          padding: "12px",
          marginTop: "20px",
          fontSize: "16px",
        }}
      />

      <br />

      <button
        onClick={generatePlan}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {loading ? "Processing…" : "Generate Plan"}
      </button>

      {result && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#f0f0f0",
            borderRadius: "10px",
          }}
        >
          <h2>📘 AI Plan</h2>
          <pre>{result}</pre>
        </div>
      )}

      {workflow && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#e6f7ff",
            borderRadius: "10px",
          }}
        >
          <h2>⚡ Agent Workflow</h2>
          <pre>{workflow}</pre>
        </div>
      )}
    </div>
  );
}
