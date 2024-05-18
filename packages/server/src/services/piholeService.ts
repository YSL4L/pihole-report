import { CONFIG } from "../consts";
import { PiholeApiResponse, } from "../types";

export async function fetchPiholeData  ()  {
    const response = await fetch(CONFIG.piholeApiUrl);
    const data = await response.json() as PiholeApiResponse;
    return data;
};

export function createReport (data: any)  {
    return `
        Pi-hole Summary Report

        Domains Blocked: ${data.domains_being_blocked}
        DNS Queries Today: ${data.dns_queries_today}
        Ads Blocked Today: ${data.ads_blocked_today}
        Ads Percentage Today: ${data.ads_percentage_today.toFixed(2)}%
        Clients Ever Seen: ${data.unique_clients}
    `;
};