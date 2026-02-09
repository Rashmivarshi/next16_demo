import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p> Dashboard navbar</p>
      {children}
    </div>
  );
};

export default layout;
