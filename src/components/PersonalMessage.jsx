import React from "react";

export default function PersonalMessage({ message }) 
{
  // console.log("Personal Message");

  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#b342f5",
      }}
    >
      {message.text}
    </div>
  );
}
