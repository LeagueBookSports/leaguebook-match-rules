"use strict";
// American football (NFL) — API-NFL status short-codes.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFL_FINISHED_STATUSES = exports.NFL_LIVE_STATUSES = void 0;
exports.isNflLive = isNflLive;
exports.isNflFinished = isNflFinished;
exports.getNflMatchStatusOrder = getNflMatchStatusOrder;
exports.NFL_LIVE_STATUSES = [
    'Q1',
    'Q2',
    'Q3',
    'Q4',
    'OT',
    'HT',
    'BT',
];
exports.NFL_FINISHED_STATUSES = ['FT', 'AOT'];
function isNflLive(status) {
    return !!status && exports.NFL_LIVE_STATUSES.includes(status);
}
function isNflFinished(status) {
    return (!!status && exports.NFL_FINISHED_STATUSES.includes(status));
}
function getNflMatchStatusOrder(status) {
    if (isNflLive(status))
        return 0;
    if (isNflFinished(status))
        return 1;
    return 2;
}
