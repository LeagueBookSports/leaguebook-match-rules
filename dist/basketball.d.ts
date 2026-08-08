export type BasketballStatusShort = 'NS' | 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'OT' | 'BT' | 'HT' | 'FT' | 'AOT' | 'CANC' | 'SUSP' | 'POST' | 'ABD';
export declare const BASKETBALL_LIVE_STATUSES: BasketballStatusShort[];
export declare const BASKETBALL_FINISHED_STATUSES: BasketballStatusShort[];
export declare const BASKETBALL_UPCOMING_STATUSES: BasketballStatusShort[];
export declare const BASKETBALL_NOT_PLAYED_STATUSES: BasketballStatusShort[];
export declare function isBasketballLive(status: string | null | undefined): boolean;
export declare function isBasketballFinished(status: string | null | undefined): boolean;
export declare function isBasketballUpcoming(status: string | null | undefined): boolean;
export declare function isBasketballNotPlayed(status: string | null | undefined): boolean;
export declare function getBasketballMatchStatusOrder(status: string | null | undefined): number;
//# sourceMappingURL=basketball.d.ts.map