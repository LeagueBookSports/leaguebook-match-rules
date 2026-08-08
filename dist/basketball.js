"use strict";
// Basketball — API-Basketball status short-codes.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASKETBALL_NOT_PLAYED_STATUSES = exports.BASKETBALL_UPCOMING_STATUSES = exports.BASKETBALL_FINISHED_STATUSES = exports.BASKETBALL_LIVE_STATUSES = void 0;
exports.isBasketballLive = isBasketballLive;
exports.isBasketballFinished = isBasketballFinished;
exports.isBasketballUpcoming = isBasketballUpcoming;
exports.isBasketballNotPlayed = isBasketballNotPlayed;
exports.getBasketballMatchStatusOrder = getBasketballMatchStatusOrder;
exports.BASKETBALL_LIVE_STATUSES = [
    'Q1',
    'Q2',
    'Q3',
    'Q4',
    'OT',
    'BT',
    'HT',
];
exports.BASKETBALL_FINISHED_STATUSES = [
    'FT',
    'AOT',
];
exports.BASKETBALL_UPCOMING_STATUSES = ['NS'];
exports.BASKETBALL_NOT_PLAYED_STATUSES = [
    'CANC',
    'SUSP',
    'POST',
    'ABD',
];
function isBasketballLive(status) {
    return !!status && exports.BASKETBALL_LIVE_STATUSES.includes(status);
}
function isBasketballFinished(status) {
    return !!status && exports.BASKETBALL_FINISHED_STATUSES.includes(status);
}
function isBasketballUpcoming(status) {
    return !!status && exports.BASKETBALL_UPCOMING_STATUSES.includes(status);
}
function isBasketballNotPlayed(status) {
    return !!status && exports.BASKETBALL_NOT_PLAYED_STATUSES.includes(status);
}
function getBasketballMatchStatusOrder(status) {
    if (isBasketballLive(status))
        return 0;
    if (isBasketballFinished(status))
        return 1;
    return 2;
}
