import React from "react";
import "./App.css";
import Transactions from "./Transactions";
import NewTransactionForm from "./NewTransactionForm";


function App() {
  function handleUpdateOnSubmission(NewTransaction){
    console.log(NewTransaction)}
  return (
    <div className="ui raise segment">
      <div className="header-text">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <Transactions/>
      <NewTransactionForm onSubmission={handleUpdateOnSubmission}/>
    </div>
  );
}

export default App;