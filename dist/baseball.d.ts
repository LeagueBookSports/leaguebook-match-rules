export declare const BASEBALL_LIVE_STATUSES: readonly ["LIVE", "IN", "TOP", "BOT", "1", "2", "3", "4", "5", "6", "7", "8", "9", "EX", "HT"];
export declare const BASEBALL_FINISHED_STATUSES: readonly ["FT", "AET", "PEN", "FINAL", "FINISHED"];
export declare function isBaseballLive(status: string | null | undefined): boolean;
export declare function isBaseballFinished(status: string | null | undefined): boolean;
export declare function getBaseballMatchStatusOrder(status: string | null | undefined): number;
export declare function getBaseballLeaguePriority(_leagueId: number, _leagueName: string): number;
//# sourceMappingURL=baseball.d.ts.map