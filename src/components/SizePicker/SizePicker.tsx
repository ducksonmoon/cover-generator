import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { PlatformModel } from "./Platform.model";
export default function SizePicker(props) {
  const [selectedPlatform, setSelectedPlatform] = useState();

  const platforms: Array<PlatformModel> = [
    {
      name: "YouTube",
      icon: (() => <FontAwesomeIcon icon={faYoutube} size="2xl" />)(),
      width: "1235px",
      height: "338px",
    },
    {
      name: "Instagram",
      icon: (() => <FontAwesomeIcon icon={faInstagram} size="2xl" />)(),
      width: "800px",
      height: "800px",
    },
  ];

  const handlePlatformClick = (platform: PlatformModel) => {
    props.handlePlatformSize(platform);
    setSelectedPlatform(platform as any);
  };

  return (
    <div>
      {platforms.map((item, index) => (
        <span
          key={index}
          style={{ marginRight: "6px", cursor: "pointer" }}
          onClick={() => handlePlatformClick(item)}
        >
          {item.icon}
        </span>
      ))}
    </div>
  );
}
