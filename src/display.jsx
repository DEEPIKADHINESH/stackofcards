import React,{useState,useEffect}from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./display.css";
import uuid from "uuid/v4";
const itemsFromBackend=[
    {id:uuid(),title:"card1"},
    {id:uuid(),title:"card2"},
    {id:uuid(),title:"card3"},
    {id:uuid(),title:"card4"}

]
const itemsFromBackend1=[
    {id:uuid(),title:"card1"},
    {id:uuid(),title:"card2"},
    {id:uuid(),title:"card3"},
    {id:uuid(),title:"card4"}

]
const itemsFromBackend2=[
    {id:uuid(),title:"card1"},
    {id:uuid(),title:"card2"},
    {id:uuid(),title:"card3"},
    {id:uuid(),title:"card4"}

]
const itemsFromBackend3=[
    {id:uuid(),title:"card1"},
    {id:uuid(),title:"card2"},
    {id:uuid(),title:"card3"},
    {id:uuid(),title:"card4"}
]
const columnsFromBackend={
    [uuid()]:{
        name:"Title1",
        items:itemsFromBackend,
        color:"red"
    },
    [uuid()]:{
        name:"Title2",
        items:itemsFromBackend1,
        color:"blue"
    },
    [uuid()]:{
        name:"Title3",
        items:itemsFromBackend2,
        color:"green"
    },
    [uuid()]:{
        name:"Title4",
        items:itemsFromBackend3,
        color:"black"
    }
}
const onDragEnd = (result, columns, setColumns) => {
      if (!result.destination) return;
      const { source, destination } = result;
    
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
       // console.log(sourceColumn)
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
      const handleAdd=()=>{
             console.log(columns)
             //setColumns(current => [...current, {id:uuid(),title:"card100",color:"black"}])
      }
      const handleDelte=(id,columnId)=>{
       

      }
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
                    
                    margin:20
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
                              //background:column.color,
                              padding: 4,
                              width: 250,
                              minHeight: 500,
                              margin:20
                              
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
                                        
                                        <div style={{padding:"5px",background:column.color}}>{item.title}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" style={{float:"right"}}
                                       onClick={()=>handleDelte(item.id,columnId)}>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></div>
                                        
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                            <button className="btn btn-primary" onClick={handleAdd}>Add</button>
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