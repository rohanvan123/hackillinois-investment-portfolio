import { Company } from "@/types/types";
import { parseRawCompanyData } from "@/utils/utils";
import { useEffect, useState } from "react";

export function useCompanyData() {
  const [companyData, setCompanyData] = useState<Company[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`api/companies`);
      const data = await response.json();
      return data;
    };

    fetchData().then((data) => {
      const parsedData = parseRawCompanyData(data);
      setCompanyData(parsedData);
    });
  }, []);

  //   const companyData = response.json();
  return { companyData };
}
