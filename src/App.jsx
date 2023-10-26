import React, { useState } from "react";

function App() {
  // State Hook - useState
  const [listStyleNumb, setListStyleNumb] = useState(true);
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  // Helper function
  const toggleListStyle=()=>{
    listStyleNumb?setListStyleNumb(false):setListStyleNumb(true)
  }
  function addItem() {
    if (!newItem) {
      alert("Enter an item");
      return;
    }

    let item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    // Update the items state variable with the new item
    setItems((oldList) => [...oldList, item]);

    console.log(item);

    // Clear the input field
    setNewItem("");
  }

  function deleteItem(id) {
    // Filter out the item with the specified ID from the items state variable
    setItems((oldList) => oldList.filter((item) => item.id !== id));
     
    
  }
  


  
  // Add an event listener to the delete item button to call the deleteItem() function with the ID of the item to be deleted as a parameter
  const handleDeleteClick = (id) => {
    deleteItem(id);
  };

  // Style
  const myStyle = {
    listStyleType: listStyleNumb ? "lower-roman" : "none",
  };

  return (
    <div className="App container">
      <h1>TO Do List APP</h1>

      {/* //! Input */}
      <input
        type="text"
        placeholder="Add task..."
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />

      {/* //! Button */}
      <button onClick={addItem}>Add</button>
      {/* Functionality to have the serial number next to the  */}
      <button
        type="button"
        className="btn"
        data-bs-toggle="button"
        onClick={toggleListStyle}
      >
        {`Show ${listStyleNumb ? "non-numbered" : "numbered"} list`}
      </button>

      {/* //! List */}
      <ol style={myStyle}>
        {items.map((item) => (
          <li key={item.id}  className={item.strikethrough ? "strikethrough" : ""}>
            {item.value}
            <button
              style={{ border: "none" }}
              onClick={() => handleDeleteClick(item.id)}
            >
              🗑️
            </button>
            
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;