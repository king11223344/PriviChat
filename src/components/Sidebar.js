import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@mui/material";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
import db from "../firebase";
import { useStateValue } from "../api/StateProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  // const [temp, setTemp] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  const queryParameters = new URLSearchParams(window.location.search);
  const chatId = queryParameters.get("chatId");
  useEffect(() => {
    const unsubscribe = db.collection(chatId).onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
      // userRoom();
    };
  }, []);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Avatar src={user?.photoURL} />
        <div className="headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </SidebarHeader>

      <SidebarSearch>
        <div className="searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </SidebarSearch>

      <SidebarChats>
        <SidebarChat addNewChat />
        {rooms.map(
          (room) =>
            room.id !== "authorised" && room.id !== "password" && (
              <SidebarChat key={room.id} id={room.id} name={room.data.name} />
            )
        )}
      </SidebarChats>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.35;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;

  .headerRight {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;

    .MuiSvgIcon-root {
      /* margin-right: 2vw; */
      font-size: 24px !important;
    }
  }
`;

const SidebarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 39px;
  padding: 10px;

  .searchContainer {
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;

    input {
      border: none;
      margin-left: 10px;
    }

    .MuiSvgIcon-root {
      color: gray;
      padding: 10px;
    }
  }
`;

const SidebarChats = styled.div`
  flex: 1;
  background-color: white;
  overflow-y: auto;
`;
