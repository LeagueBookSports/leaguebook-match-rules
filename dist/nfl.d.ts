export type NflStatusShort = 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'OT' | 'HT' | 'BT' | 'FT' | 'AOT' | 'NS' | 'PST' | 'CANC' | 'ABD';
export type NflMatchState = 'live' | 'finished' | 'upcoming' | 'notPlayed' | 'unknown';
export declare const NFL_LIVE_STATUSES: NflStatusShort[];
export declare const NFL_FINISHED_STATUSES: NflStatusShort[];
export declare const NFL_UPCOMING_STATUSES: NflStatusShort[];
export declare const NFL_NOT_PLAYED_STATUSES: NflStatusShort[];
export declare function isNflLive(status: string | null | undefined): boolean;
export declare function isNflFinished(status: string | null | undefined): boolean;
export declare function isNflUpcoming(status: string | null | undefined): boolean;
export declare function isNflNotPlayed(status: string | null | undefined): boolean;
export declare function getNflMatchState(status: string | null | undefined): NflMatchState;
export declare function getNflMatchStatusOrder(status: string | null | undefined): number;
export declare const NFL_LEAGUE_PRIORITY: number[];
export declare function getNflLeaguePriority(id: number, name?: string): number;
//# sourceMappingURL=nfl.d.ts.map