import styled from "styled-components";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
import Front from "./components/Front";
import { useStateValue } from "./api/StateProvider";
import WhatAppFrontPage from "./components/WhatappFrontPage/WhatAppFrontPage";
function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route
          path="/rooms"
          element={
            <AppContainer>
              {!user ? (
                <>
                  <WhatAppFrontPage />
                </>
              ) : (
                <AppBody>
                  <Sidebar />
                  {/* <Chat /> */}
                  <Routes>
                    <Route path="/rooms/:roomId" render={() => <Chat />} />
                  </Routes>
                </AppBody>
              )}
            </AppContainer>
          }
        />
        <Route
          path="/rooms/:roomId"
          element={
            <AppContainer>
              {!user ? (
                <>
                  <WhatAppFrontPage />
                </>
              ) : (
                <AppBody>
                  <Sidebar />
                  <Chat />
                </AppBody>
              )}
            </AppContainer>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #dadbd3;
  display: grid;
  place-items: center;
  height: 100vh;
`;

const AppBody = styled.div`
  display: flex;
  background-color: #ededed;
  margin-top: -50px;
  width: 90vw;
  height: 90vh;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
`;
