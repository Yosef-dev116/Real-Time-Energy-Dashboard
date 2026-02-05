import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        ⚡ <span>Energy</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <a className="nav-item active">🏠 Home</a>
        <a className="nav-item">📊 Dashboard</a>
        <a className="nav-item">🔌 Devices</a>
        <a className="nav-item">📈 Metrics</a>
        <a className="nav-item">⭐ Feedback</a>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        🌡 12°C <span>Halifax</span>
      </div>
    </aside>
  );
}
