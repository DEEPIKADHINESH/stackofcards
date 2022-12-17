import React,{useState,useEffect}from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./display.css";
import uuid from "uuid/v4";
const itemsFromBackend=[
    {id:uuid(),title:"card1",color:"red"},
    {id:uuid(),title:"card2",color:"red"},
    {id:uuid(),title:"card3",color:"red"},
    {id:uuid(),title:"card4",color:"red"}

]
const itemsFromBackend1=[
    {id:uuid(),title:"card1",color:"green"},
    {id:uuid(),title:"card2",color:"green"},
    {id:uuid(),title:"card3",color:"green"},
    {id:uuid(),title:"card4",color:"green"}

]
const itemsFromBackend2=[
    {id:uuid(),title:"card1",color:"blue"},
    {id:uuid(),title:"card2",color:"blue"},
    {id:uuid(),title:"card3",color:"blue"},
    {id:uuid(),title:"card4",color:"blue"}

]
const itemsFromBackend3=[
    {id:uuid(),title:"card1",color:"black"},
    {id:uuid(),title:"card2",color:"black"},
    {id:uuid(),title:"card3",color:"black"},
    {id:uuid(),title:"card4",color:"black"}
]
const columnsFromBackend={
    [uuid()]:{
        name:"title1",
        items:itemsFromBackend,
        color:"red"
    },
    [uuid()]:{
        name:"title2",
        items:itemsFromBackend1,
        color:"green,"
    },
    [uuid()]:{
        name:"title3",
        items:itemsFromBackend2,
        color:"black"
    },
    [uuid()]:{
        name:"title4",
        items:itemsFromBackend3,
        color:"blue"
    }
}
const onDragEnd = (result, columns, setColumns) => {
      if (!result.destination) return;
      const { source, destination } = result;
    
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems
          }
        });
      } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems
          }
        });
      }
    };
    
    function Display() {
      const [columns, setColumns] = useState(columnsFromBackend);
      return (
        <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
          <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                   
                  }}
                  key={columnId}
                >
                  <h2>{column.name}</h2>
                  <div style={{ margin: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                              padding: 4,
                              width: 250,
                              minHeight: 500,
                              
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                        //   backgroundColor: snapshot.isDragging
                                        //     ? "#263B4A"
                                        //     : "#456C86",
                                          color: "white",
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                        <div style={{background:item.color,padding:"5px"}}>{item.title}</div>
                                        
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      );
    }
export default Display