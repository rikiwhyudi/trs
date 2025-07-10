import axios from "axios";

const BASE_URL = "https://rqjmponzqcdrfxtthpxk.supabase.co/rest/v1/tickets";

const supabaseApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
    "Content-Type": "application/json",
  },
});

export const getTickets = async () => {
  const res = await supabaseApi.get("/");
  return res.data;
};

export const createTicket = async (data: any) => {
  const res = await supabaseApi.post("/", data);
  return res.data;
};

export const updateTicket = async (id: number, data: any) => {
  const res = await supabaseApi.patch(`?id=eq.${id}`, data);
  return res.data;
};

export const deleteTicket = async (id: number) => {
  const res = await supabaseApi.delete(`?id=eq.${id}`);
  return res.data;
};
