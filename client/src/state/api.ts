import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GetKpiResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from "./types";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpiResponse>, void>({
      query: () => "kpi/kpis",
      providesTags: ["Kpis"],
    }),
    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => "product/products",
      providesTags: ["Products"],
    }),
    getTranactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => "transaction/transactions",
      providesTags: ["Transactions"],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTranactionsQuery } =
  api;
