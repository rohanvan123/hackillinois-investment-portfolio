import { Company } from "@/types/types";
import { FC, useState } from "react";
import ReactLoading from "react-loading";

interface CompanyTableProps {
  filteredCompanies: Company[];
}
const headers = ["Name", "Ticker", "Industry", "Sector"];

const CompanyTable: FC<CompanyTableProps> = ({ filteredCompanies }) => {
  const [copiedIndexes, setCopiedIndexes] = useState<number[]>([]);
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Unable to copy to clipboard:", err);
    }
  };

  const handleCopyClick = (netId: string, index: number) => {
    copyToClipboard(netId);
    setCopiedIndexes((prevIndexes: number[]) => [...prevIndexes, index]);

    // Set a timeout to reset the copied index after 3 seconds
    setTimeout(() => {
      setCopiedIndexes((prevIndexes) => prevIndexes.filter((i) => i !== index));
    }, 3000);
  };

  return (
    <div className="border rounded-[10px] overflow-hidden overlay mt-[50px] w-[800px]">
      <table className="w-[800px] table-fixed">
        <caption className="bg-white text-center h-[67px]">
          <span className="flex flex-col justify-center h-[67px] ml-[20px] text-[30px] text-[#101828]">
            Companies
          </span>
        </caption>
        <thead>
          <tr className="h-[44px] bg-[#EAECF0] text-[12px] text-[#667085] text-left">
            {headers.map((header: string, idx: number) => (
              <th key={idx}>
                <div className="ml-[20px] flex flex-row">
                  <div>{header}</div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white w-[615px]">
          {filteredCompanies.length !== 0 ? (
            filteredCompanies.map((company: Company, key: number) => (
              <tr
                key={key}
                className="h-[60px] border-gray-300 border-[.5px] hover:bg-gray-300 hover:cursor-pointer"
              >
                <td className="font-chivo text-[14px] text-[#667085]">
                  <div className="ml-[20px]">{company.name}</div>
                </td>
                <td className="font-chivo text-[14px] text-[#667085]">
                  <div className="flex flex-row gap-[20px] ml-[20px] justify-between">
                    <div className="mt-[5px]">{company.ticker}</div>
                    {!copiedIndexes.includes(key) ? (
                      <button
                        onClick={() => handleCopyClick(company.ticker, key)}
                        className="h-[30px] rounded-[5px] text-white bg-green-500 w-[50px]"
                      >
                        Copy
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCopyClick(company.ticker, key)}
                        className="h-[30px] rounded-[5px] text-white bg-green-500 w-[70px]"
                      >
                        Copied
                      </button>
                    )}
                  </div>
                </td>
                <td className="font-chivo text-[14px] text-[#667085]">
                  <div className="ml-[20px]">
                    {company.industry ? company.industry : "N/A"}
                  </div>
                </td>
                <td className="font-chivo text-[14px] text-[#667085]">
                  <div className="ml-[20px]">
                    {company.sector ? company.sector : "N/A"}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="h-[50px]">
              <td
                className="w-[800px] text-center text-black"
                colSpan={headers.length}
              >
                <div className="flex flex-col items-center mt-[50px] h-[80px]">
                  No Companies Found
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
