import "./assets/styles.css";
import React, { useState } from "react";
import AddComment from "./components/AddComment";
import Card from "./shared/Card";

export default function App() {
  return (
    <Card>
      <div className="container">
        <AddComment />
      </div>
    </Card>
  );
}
