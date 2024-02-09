import React from 'react'

type Props = {
  children: React.ReactNode;
}

const HeaderText = ({ children }: Props) => {
  return (
      <h1 className="md:relative basis-3/5 mt-12 font-monserrat text-l font-bold 
      break-word max-w-5xl text-p-textas 
      transition duration-500 hover:text-davi ">When creating my first portfolio piece, I materialized ideas into the visual realm. 
      I devoted attention to detail, infusing creativity into the project, aiming not only to gain experience but also to showcase my unique perspective</h1>
  );
};

export default HeaderText;