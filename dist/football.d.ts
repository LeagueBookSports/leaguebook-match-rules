export type FootballStatusShort = '1H' | 'HT' | '2H' | 'ET' | 'BT' | 'P' | 'LIVE' | 'INT' | 'SUSP' | 'FT' | 'AET' | 'PEN' | 'AWD' | 'WO' | 'TBD' | 'NS' | 'PST' | 'CANC' | 'ABD';
export type FootballMatchState = 'live' | 'finished' | 'upcoming' | 'notPlayed' | 'unknown';
export declare const FOOTBALL_LIVE_STATUSES: FootballStatusShort[];
export declare const FOOTBALL_FINISHED_STATUSES: FootballStatusShort[];
export declare const FOOTBALL_UPCOMING_STATUSES: FootballStatusShort[];
export declare const FOOTBALL_NOT_PLAYED_STATUSES: FootballStatusShort[];
export declare function isFootballLive(status: string | null | undefined): boolean;
export declare function isFootballFinished(status: string | null | undefined): boolean;
export declare function isFootballUpcoming(status: string | null | undefined): boolean;
export declare function isFootballNotPlayed(status: string | null | undefined): boolean;
export declare function getFootballMatchState(status: string | null | undefined): FootballMatchState;
export declare function getFootballMatchStatusOrder(status: string | null | undefined): number;
//# sourceMappingURL=football.d.ts.map