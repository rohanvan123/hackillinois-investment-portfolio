// pages/api/anotherRoute.ts (or .js)
import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    `https://backend.simfin.com/api/v3/companies/list`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.SIM_FIN_API_KEY!,
      },
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}
