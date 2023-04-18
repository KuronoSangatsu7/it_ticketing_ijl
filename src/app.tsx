import React from "react";
import Layout from "./components/UI/Layout";
import { Route, Routes } from "react-router-dom";
import Tickets from "./routes/tickets";
import Home from "./routes/home";
import useFirebaseSub from "./hooks/use-firebase-sub";
import NewTicket from "./routes/new_ticket";
import Analytics from "./routes/analytics";

const App = () => {
  // Setup a snapshot listener that will add tickets to global state
  useFirebaseSub("tickets");

  // Setup a snapshot listener that will add techs to global state
  useFirebaseSub("techs");

  // Setup a snapshot listener that will add techs to global state
  useFirebaseSub("symptoms");

  useFirebaseSub("departments");

  return (
    <Layout>
      <Routes>
        <Route path="/it_ticketing_ijl" element={<Home />} />
        <Route path="/it_ticketing_ijl/tickets" element={<Tickets />} />
        <Route path="/it_ticketing_ijl/new_ticket" element={<NewTicket />} />
        <Route path="it_ticketing_ijl/analytics" element={<Analytics />} />
      </Routes>
    </Layout>
  );
};

export default App;
