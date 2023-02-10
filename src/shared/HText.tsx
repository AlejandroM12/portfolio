import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h3 className="text-6xl font-bold mt-[10px] mb-[12px] mx-0 text-gray-500">{children}</h3>
  );
};

export default HText;
