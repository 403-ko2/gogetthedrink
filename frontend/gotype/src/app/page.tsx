"use client";
import Image from "next/image";
import { useState, ChangeEvent } from "react";

export default function Home() {
    const [item, setItem] = useState<string>("");
    const [todo, setTodo] = useState<string[]>([]);

    const addItem = () => {
        setTodo([item, ...todo]);
        setItem("");

    };

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setItem(e.target.value);
};

  return (
      <main style={{ 
        padding: "20px", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh"
    }}> 
    <div style={{ textAlign: "center", maxWidth: "400px", backgroundColor: "darkgreen" }}> 

    <input
    value = {item}
    onChange = {handleChange}
    style={{ padding: "8px", marginRight: "8px" }}
    />
    <button style={{ padding: "8px 12px" }}
    onClick= {addItem}>Add Task</button>

    <ul>
    {todo.map((t,i) => (
        <li key ={i}> {t} </li>
    ))}
    </ul>

    </div>
    </main>
  );
}
