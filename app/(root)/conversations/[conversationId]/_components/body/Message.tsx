import React from "react";
import { format } from "date-fns";
import { timeStamp } from "console";

type Props = {
  fromCurrentUser: boolean;
  senderImage: string;
  SenderName: string;
  lastByUser: boolean;
  content: string[];
  createAt: number;
  type: string;
};

const Message = ({
  fromCurrentUser,
  senderImage,
  SenderName,
  lastByUser,
  content,
  createAt,
  type,
}: Props) => {
  const formatTime = (timeStamp: number) => {
    return format(timeStamp, "HH:mm");
  };
  return <div>Message</div>;
};

export default Message;
