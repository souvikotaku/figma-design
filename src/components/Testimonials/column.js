import React from "react";
import styled from "styled-components";
import Task from "./task.js";
import { Droppable, Draggable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import "./styles.scss";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? "skyblue" : "white")}
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <>
        <Container className="desktesticolumn">
          <Title>{this.props.column.title}</Title>
          <Droppable
            droppableId={this.props.column.id}
            type="TASK"
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided?.innerRef}>
                {this.props.tasks.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <ListItem
                        provided={provided}
                        // snapshot={snapshot}
                        item={item}
                      />
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </Container>
        <Container className="mobiletesticolumn">
          <Title
            style={{
              marginTop: "10%",
            }}
          >
            {this.props.column.title}
          </Title>
          {/* <Droppable
            droppableId={this.props.column.id}
            type="TASK"
            direction="vertical"
          >
            {(provided, snapshot) => (
              // <TaskList
              //   ref={provided.innerRef}
              //   {...provided.droppableProps}
              //   isDraggingOver={snapshot.isDraggingOver}
              // >
              //   {this.props.tasks.map((task, index) => (
              //     <Task key={task.id} task={task} index={index} />
              //   ))}
              //   {provided.placeholder}
              // </TaskList>
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {this.props.tasks.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <ListItem
                        provided={provided}
                        // snapshot={snapshot}
                        item={item}
                      />
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable> */}
          {this.props.tasks.map((item, index) => (
            <ListItem
              // provided={provided}
              // snapshot={snapshot}
              item={item}
            />
          ))}
        </Container>
      </>
    );
  }
}
