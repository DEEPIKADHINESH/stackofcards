
// // import React, { useEffect, useState } from "react";
// // import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// // import "./App.css";

//import Display from "./display";

// // const data = [
// //   {
// //     id: "1",
// //     content: "Item-1",
// //   },
// //   // {
// //   //   id: 2,
// //   //   content: "Item-2",
// //   // },
// //   // {
// //   //   id: 3,
// //   //   content: "Item-3",
// //   // },
// //   // {
// //   //   id: 4,
// //   //   content: "Item-4",
// //   // },
// //   // {
// //   //   id:5,
// //   //   content: "Item-5",
// //   // },
// //   // {
// //   //   id: 6,
// //   //   content: "Item-6",
// //   // },
// //   // {
// //   //   id:7,
// //   //   content: "Item-7",
// //   // },
  
// // ];
 

// // // a little function to help us with reordering the result
// // const reorder = (list, startIndex, endIndex) => {
// //   const result = Array.from(list);
// //   const [removed] = result.splice(startIndex, 1);
// //   result.splice(endIndex, 0, removed);

// //   return result;
// // };

// // const grid = 8;

// // const getItemStyle = (isDragging, draggableStyle) => ({
// //   userSelect: "none",
// //   padding: grid * 2,
// //   margin: `0 0 ${grid}px 0`,
// //   background: isDragging ? "lightgreen" : "grey",
// //   ...draggableStyle,
// // });

// // const getListStyle = (isDraggingOver) => ({
// //   background: isDraggingOver ? "lightblue" : "lightgrey",
// //   padding: grid,
// //   width: 250,
// // });

// // const App = () => {
// //   const [items, setItems] = useState(data);
// //   const handleDelete=(id)=>{
    
// //     setItems(items.filter((item, index) => item.id !==id));
// //   }
// //   const handleAdd=()=>{
// //      if(items.length<8){
// //       const newAdd=[{id:items.length+1,content:"item"+items.length+1}]
// //      setItems([...items].concat(newAdd))
// //      }
// //      else{
// //       alert("only 8 are allowed")
// //      }
     
     
// //   }

// //   // useEffect(() => {
// //   //   setItems(data);
// //   // }, []);

// //   const onDragEnd = (result) => {
// //     if (!result.destination) {
// //       return;
// //     }

// //     const reorderedItems = reorder(
// //       items,
// //       result.source.index,
// //       result.destination.index
// //     );

// //     console.log({ reorderedItems });
// //     setItems(reorderedItems);
// //   };

// //   return (
// //     <div className="main_content">
// //       <DragDropContext onDragEnd={onDragEnd}>
// //         <Droppable droppableId="droppable">
// //           {(provided, snapshot) => (
// //             <div
// //               {...provided.droppableProps}
// //               ref={provided.innerRef}
// //               style={getListStyle(snapshot.isDraggingOver)}
// //             >
// //               {items.map((item, index) => (
// //                 <Draggable key={item.id} draggableId={item.id} index={index}>
// //                   {(provided, snapshot) => (
// //                     <div
// //                       className="card"
// //                       ref={provided.innerRef}
// //                       {...provided.draggableProps}
// //                       {...provided.dragHandleProps}
// //                       style={getItemStyle(
// //                         snapshot.isDragging,
// //                         provided.draggableProps.style
// //                       )}
// //                     >
// //                       {item.content}
// //                       <button onClick={()=>handleDelete(item.id)}>Delete</button>
// //                       <button onClick={()=>handleAdd()}>Add</button>
// //                     </div>
// //                   )}
// //                 </Draggable>
// //               ))}
// //               {provided.placeholder}
             
// //             </div>
// //           )}
// //         </Droppable>
// //       </DragDropContext>
// //     </div>
// //   );
// // };

// // export default App
// import React,{useState} from 'react';
// import {DragDropContext} from 'react-beautiful-dnd';
// import helper from './helper_functions'

// import Column from './column';

// function App() {

//   let initialState =   [
//     {
//       groupName:"red",
//       tasks:[
//           {id:"1", title:"Test-1"},
//           {id:"2", title:"Test-2"}
//         ]
//     },
      
    
//     {
//       groupName:"green", 
//       tasks:[
//           {id:"3", title:"Test-3"},
//           {id:"4", title:"Test-4"}
//         ]
//     },
//     {
//       groupName:"blue",
//       tasks:[
//         {id:"5",title:"Test-5"},
//         {id:"6",title:"Test-6"}
//       ]
//     },
//     {
//       groupName:"black",
//       tasks:[
//         {id:"6",title:"Test-6"}
//       ]
//     }
//   ]

// let style={
//   display:"inline-block",
//   width:"700px"

// }

// const [taskList, setTasks] = useState(initialState)

// function onDragEnd(val){

//    let result = helper.reorder(val.source,val.destination,taskList);
//    setTasks(result)
// }

// return (
//   <DragDropContext onDragEnd={onDragEnd}>
//      <Column droppableId="red" list= {taskList[0].tasks} type="TASK"/>
//      <Column droppableId ="green" list = {taskList[1].tasks} type="TASK"/>
//      <Column droppableId="blue" list={taskList[2].tasks} type="TASK"/>
//      <Column droppableId="black" list={taskList[3].tasks} type="TASK"/>
    
//   </DragDropContext>
// );
// }

 


// export default App;
import React from "react";
import Display from "./display";
function App(){
  return(
    <Display/>
  )
}
export default App;
