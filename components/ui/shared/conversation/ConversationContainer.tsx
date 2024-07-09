import React from "react";
import { Card } from "../../card";

type Props = React.PropsWithChildren<{}>;
const ConversationConatiner = ({ children }: Props) => {
  return (
    <Card className="flex flex-col lg:h-full w-full h-[calc(100vh-32px)] p-2 gap-2">
      {children}
    </Card>
  );
};

export default ConversationConatiner;
