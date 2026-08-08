export declare const NFL_LIVE_STATUSES: readonly ["Q1", "Q2", "Q3", "Q4", "OT", "HT", "BT"];
export declare const NFL_FINISHED_STATUSES: readonly ["FT", "AOT"];
export type NflStatusShort = (typeof NFL_LIVE_STATUSES)[number] | (typeof NFL_FINISHED_STATUSES)[number] | 'NS';
export declare function isNflLive(status: string | null | undefined): boolean;
export declare function isNflFinished(status: string | null | undefined): boolean;
export declare function getNflMatchStatusOrder(status: string | null | undefined): number;
export declare const NFL_LEAGUE_PRIORITY: number[];
export declare function getNflLeaguePriority(id: number, name?: string): number;
//# sourceMappingURL=nfl.d.ts.map