import Navbar from "@/components/layout/Navbar";
import { LeftSidebar} from "@/components/layout/LeftSidebar";
import React from "react";
import RightSidebar from "@/components/layout/RightSidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-stone-100 min-h-screen">
      <Navbar />

      <div className="flex gap-4 pt-20 mx-4">
        
          <LeftSidebar />
        
        <div className="mt-4 border border-black w-full">{children}</div>
        <RightSidebar />
      </div>
    </div>
  );
}
