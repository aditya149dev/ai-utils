import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";

interface PopoverUIProps {
  triggerText: string;
  children: React.ReactNode;
}

const PopoverUI = ({ triggerText, children }: PopoverUIProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>{triggerText}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[calc(100vw-2rem)] max-w-2xl rounded bg-gray-800 pb-4 shadow-lg will-change-[transform,opacity] focus:outline-none mx-4 max-h-[80vh] flex flex-col border border-gray-700">
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default PopoverUI;
