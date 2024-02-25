import { Company } from "@/types/types";
import SearchIcon from "./Icons/SearchIcon";
import React, { Dispatch, FC, SetStateAction, useState } from "react";

const filterOptions = ["Name", "Ticker"];

interface SearchBarProps {
  companyData: any;
  setFilteredCompanies: Dispatch<SetStateAction<any>>;
}

const CompanySearchBar: FC<SearchBarProps> = ({
  companyData,
  setFilteredCompanies,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [filterOption, setFilterOption] = useState(filterOptions[0]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lowerCaseSearchTerm = searchValue.toLowerCase();

    if (filterOption === filterOptions[0]) {
      // filter by name
      const filteredList = companyData.filter((company: Company) =>
        company.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredCompanies(filteredList);
    } else {
      // filter by ticker
      const filteredList = companyData.filter((candidate: Company) =>
        candidate.name.toLowerCase().includes(lowerCaseSearchTerm)
      );
      setFilteredCompanies(filteredList);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-[50px] w-[800px] mt-[20px] flex flex-row border-black border-[1px]">
        <select
          className="bg-green-500 w-[150px] text-white text-[20px] border-black border-[1px]"
          value={filterOption}
          onChange={handleFilterChange}
        >
          {filterOptions.map((text: string, key: number) => (
            <option key={key} value={text}>
              {text}
            </option>
          ))}
        </select>
        <input
          className="w-full h-[49px] border-black border-[1px] text-[20px]"
          type="text"
          placeholder="Search For"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button
          className="bg-green-500 w-[60px] flex flex-row justify-center border-black border-[1px]"
          type="submit"
        >
          <div className="mt-[8px]">
            <SearchIcon />
          </div>
        </button>
      </div>
    </form>
  );
};

export default CompanySearchBar;
