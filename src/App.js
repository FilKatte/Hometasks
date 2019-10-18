import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Buy eggs" },
    { id: 2, text: "Pay bills" },
    { id: 3, text: "Invite friends over" },
    { id: 4, text: "Fix the TV" }
  ]);
  return (
    <div style={{ marginTop: "2rem" }}>
      <div style={{ marginBottom: "1rem" }}>
        <TransitionGroup className="todo-list">
          {items.map(({ id, text }) => (
            <CSSTransition key={id} timeout={2000} classNames="item">
              <div className="hello">
                <button
                  className="remove-btn"
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    setItems(items => items.filter(item => item.id !== id))
                  }
                >
                  &times;
                </button>
                {text}
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <button
        onClick={() => {
          const text = prompt("Enter some text");
          if (text) {
            setItems(items => [...items, { id: new Date(), text }]);
          }
        }}
      >
        Add Item
      </button>
    </div>
  );
}

export default App;
