import React from "react";
import styled from "styled-components";
import Card from "./Card";
import "./scroll.css";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
    background-color: pink;
    border-radius: 2.5px;
    width: 400px;
    height: 900px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    border: 1px solid gray;
`;

const Title = styled.h3`
    padding: 8px;
    background-color: lightpink;
    text-align: center;
`;

const TaskList = styled.div`
    padding: 3px;
    transistion: background-color 0.2s ease;
    background-color: lightpink;
    flex-grow: 1;
    min-height: 100px;
`;

const DeleteButton = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
`;

export default function Column({ title, tasks, id, onDeleteTask }) {
    const handleDeleteTask = (taskId) => {
        onDeleteTask(taskId);
    };

    return (
        <Container className="column">
            <Title
                style={{
                    backgroundColor: "lightgreen",
                    position: "sticky",
                    top: "0",
                }}
            >
                {title}
            </Title>
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {tasks.map((task, index) => (
                            <div key={index}>
                                <Card task={task} />
                                <DeleteButton onClick={() => handleDeleteTask(task.id)}>Delete</DeleteButton>
                            </div>
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    );
}
