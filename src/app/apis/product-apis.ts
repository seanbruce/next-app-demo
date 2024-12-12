import delay from "@/lib/delay";
import { format } from "date-fns";

export const getProductHeader = async (id: string) => {
  await delay(1000);
  return {
    title: `Product - ${id}`,
    updatedAt: format(new Date(), "HH时mm分ss秒"),
  };
};

export const getProductInfo = async (id: string) => {
  await delay(1000);
  return null;
};

export const getProductComments = async (id: string) => {
  await delay(4000);
  return [];
};
