import React from "react";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionLists from "./components/TransactionLists";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionLists />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </>
  );
};

export default App;
