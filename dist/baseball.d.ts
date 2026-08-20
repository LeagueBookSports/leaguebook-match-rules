export type BaseballStatusShort = 'IN1' | 'IN2' | 'IN3' | 'IN4' | 'IN5' | 'IN6' | 'IN7' | 'IN8' | 'IN9' | 'LIVE' | 'IN' | 'TOP' | 'BOT' | 'EX' | 'HT' | 'FT' | 'AET' | 'PEN' | 'FINAL' | 'FINISHED' | 'NS' | 'POST' | 'CANC' | 'ABD' | 'INTR';
export type BaseballMatchState = 'live' | 'finished' | 'upcoming' | 'notPlayed' | 'unknown';
export declare const BASEBALL_LIVE_STATUSES: BaseballStatusShort[];
export declare const BASEBALL_FINISHED_STATUSES: BaseballStatusShort[];
export declare const BASEBALL_UPCOMING_STATUSES: BaseballStatusShort[];
export declare const BASEBALL_NOT_PLAYED_STATUSES: BaseballStatusShort[];
export declare function isBaseballLive(status: string | null | undefined): boolean;
export declare function isBaseballFinished(status: string | null | undefined): boolean;
export declare function isBaseballUpcoming(status: string | null | undefined): boolean;
export declare function isBaseballNotPlayed(status: string | null | undefined): boolean;
export declare function getBaseballMatchState(status: string | null | undefined): BaseballMatchState;
export declare function getBaseballMatchStatusOrder(status: string | null | undefined): number;
export declare function getBaseballLeaguePriority(_leagueId: number, _leagueName: string): number;
//# sourceMappingURL=baseball.d.ts.map