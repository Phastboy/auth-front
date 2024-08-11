"use server";

import { fetchFromApi } from "@/utils/common/fetch";

export async function getAllUser() {
  return fetchFromApi({ endpoint: "/users" });
}

export async function fetchWithAuth() {
  return fetchFromApi({ endpoint: "/auth/profile" });
}

export async function getStats() {
  return fetchFromApi({ endpoint: "/admin/users/stats" });
}
