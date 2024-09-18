import React from 'react'
import { Search } from "lucide-react";

interface SearchProps  {
  placeholder?: string;
  className?: string
  // onSearch: () => void;


}
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

const SearchBar = ({placeholder = 'Search ...', className}:SearchProps) => {
  return (
    <form onSubmit={handleSubmit} className={`flex items-center`}>
      <input
        type="text"
        placeholder={placeholder}
        className={`flex-grow px-5 py-2 border border-gray-300 rounded-l-md focus:outline-none w-[30vw] ${className}`}
      />
      <button
        type="submit"
        className="px-4 py-[11px] bg-primary text-white rounded-r-md hover:bg-primary/80 focus:outline-none"
      >
        <Search size={20} />
      </button>
    </form>
  );
}

export default SearchBar