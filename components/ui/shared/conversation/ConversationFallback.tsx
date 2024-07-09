import React from "react";
import { Card } from "../../card";

const ConversationFallback = () => {
  return (
    <Card className="hidden lg:flex h-full w-full items-center justify-center bg-secondary text-secondary-foreground">
      Select/Start a conversation to get started!
    </Card>
  );
};

export default ConversationFallback;
