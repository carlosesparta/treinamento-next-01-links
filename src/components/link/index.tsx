"use client";
import { useState } from "react";

interface LinkProps {
  title: string;
  url: string;
}

const CustomLink = ({ title, url }: LinkProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="w-full h-12 flex justify-center items-center rounded-sm bg-white"
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span className="text-gray-900">{title}</span>
      </a>
    </div>
  );
};

export default CustomLink;
