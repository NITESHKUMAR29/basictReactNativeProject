import axiosInstance from "@/src/config/axios/axiosInstance";
import { GetPujaParams } from "./interfaces/puja";

export const getAllEvents = async ({
  eventType = "111",
  page,
  language,
  query,
}: GetPujaParams) => {
  try {
    let url = `/kriya/all?eventType=${eventType}&page=${page}`;
    if (query) {
      url += `&query=${encodeURIComponent(query)}`;
    }
    const response = await axiosInstance.get(url, {
      headers: {
        language: language || "en",
      },
    });
    console.log(response.data)

    return response.data;
  } catch (error) {
    console.log("Error fetching events:", error);
    console.error(error);
  }
};
