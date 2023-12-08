import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Header from "./components/header/header";
import List from "./components/list/list";

function App() {
  let [itemStore, setItemStore] = useState([]);

  function handleaddItems(obj) {
    setItemStore((items) => [...items, obj]);
  }

  function handleClose(id) {
    setItemStore((values) => values.filter((items) => items.id !== id));
  }

  function handleChecked(id) {
    setItemStore((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, packedstatus: item.packedStatus ? false : true }
          : item
      )
    );
  }

  function handleClear() {
    let alert = "Are you sure you want to delete all items?";
    if (window.confirm(alert) === true) setItemStore([]);
  }
  return (
    <div className="app">
      <Header />
      <Form handleaddItems={handleaddItems} />
      <List
        objects={itemStore}
        handleClose={handleClose}
        handleChecked={handleChecked}
        handleClear={handleClear}
      />
      <Footer itemStore={itemStore} />
    </div>
  );
}

export default App;
