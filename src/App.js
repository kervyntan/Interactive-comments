import "./assets/styles.css";
import React, { useState } from "react";
import AddComment from "./components/AddComment";
import CommentItem from "./components/CommentItem";
import Card from "./shared/Card";

export default function App() {
  return (
    <Card>
      <div className="container">
        <AddComment />
        <CommentItem />
      </div>
    </Card>
  );
}
