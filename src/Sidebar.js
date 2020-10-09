import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  EmojiFlags,
  LocalHospital,
  People,
  Chat,
  Storefront,
  VideoLibrary,
  ExpandMoreOutlined,
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaCcvzDeiaAOP-cFSz0OJ0XvlR83YzYRXl_g&usqp=CAU"
        }
        title="Sallar Bhutto"
      />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}
