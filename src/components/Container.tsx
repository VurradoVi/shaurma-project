import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full min-h-[96vh] overflow-hidden max-w-[1540px] mx-auto mt-5 mb-5 bg-white rounded-xl px-12 py-8 max-[800px]:px-5 max-[600px]:mt-2">
      {children}
    </div>
  );
};

export default Container;
