import CompanySearchBar from "@/components/CompanySearchBar";
import CompanyTable from "@/components/CompanyTable";
import { useCompanyData } from "@/hooks/companies";
import { Company } from "@/types/types";
import { useEffect, useState } from "react";

const Companies = () => {
  const { companyData } = useCompanyData();
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  useEffect(() => {
    setFilteredCompanies(companyData);
  }, [companyData]);
  return (
    <div className="width-full flex flex-row justify-center" items-center>
      <div>
        <CompanySearchBar
          companyData={companyData}
          setFilteredCompanies={setFilteredCompanies}
        />
        <CompanyTable filteredCompanies={filteredCompanies} />
      </div>
    </div>
  );
};

export default Companies;
