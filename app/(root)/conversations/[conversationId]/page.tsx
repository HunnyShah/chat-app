"use client";

import ConversationConatiner from "@/components/ui/shared/conversation/ConversationContainer";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Loader2 } from "lucide-react";
import React from "react";
import Header from "./_components/Header";
import Body from "./_components/body/Body";
import ChatInput from "./_components/input/ChatInput";

type Props = { params: { conversationId: Id<"conversations"> } };

const ConversationPage = ({ params: { conversationId } }: Props) => {
  const conveersation = useQuery(api.conversation.get, { id: conversationId });
  return conveersation === undefined ? (
    <div className=" w-full h-full flex items-center justify-center">
      <Loader2 className="h-8 w-8" />
    </div>
  ) : conveersation === null ? (
    <p className=" w-full h-full flex items-center justify-center">
      Conversation not found
    </p>
  ) : (
    <ConversationConatiner>
      <Header
        name={
          (conveersation.isGroup
            ? conveersation.name
            : conveersation.otherMember.username) || ""
        }
        imageUrl={
          conveersation.isGroup ? undefined : conveersation.otherMember.imageUrl
        }
      />
      <Body /> <ChatInput />
    </ConversationConatiner>
  );
};

export default ConversationPage;
