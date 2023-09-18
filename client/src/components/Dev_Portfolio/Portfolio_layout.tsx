import React from "react";

const Portfolio_layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full py-2 max-h-fit px-5 rounded-[9px] flex items-center justify-center outline outline-[1px] outline-gray-400">
      {children}
    </div>
  );
};

export default Portfolio_layout;
