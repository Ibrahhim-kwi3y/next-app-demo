"use client";

import { useEffect, useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState(null); // Initialize as null for better condition handling

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setTodo(result);
            } catch (error) {
                console.error('Error fetching the todo:', error);
            }
        };

        fetchTodo();
    }, []);

    if (!todo) {
        return <div>Loading...</div>; // Show loading state
    }

    return (
        <div>
            <h3 style={{ color: "black", marginTop: "300px" }}>{todo.title}</h3>
        </div>
    );
}
