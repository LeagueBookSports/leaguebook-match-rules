"use strict";
// Baseball (MLB via API-Sports) — status short-codes.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASEBALL_FINISHED_STATUSES = exports.BASEBALL_LIVE_STATUSES = void 0;
exports.isBaseballLive = isBaseballLive;
exports.isBaseballFinished = isBaseballFinished;
exports.getBaseballMatchStatusOrder = getBaseballMatchStatusOrder;
exports.BASEBALL_LIVE_STATUSES = [
    'LIVE',
    'IN',
    'TOP',
    'BOT',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'EX',
    'HT',
];
exports.BASEBALL_FINISHED_STATUSES = [
    'FT',
    'AET',
    'PEN',
    'FINAL',
    'FINISHED',
];
function isBaseballLive(status) {
    return (!!status && exports.BASEBALL_LIVE_STATUSES.includes(status));
}
function isBaseballFinished(status) {
    return (!!status &&
        exports.BASEBALL_FINISHED_STATUSES.includes(status));
}
function getBaseballMatchStatusOrder(status) {
    if (isBaseballLive(status))
        return 0;
    if (isBaseballFinished(status))
        return 2;
    return 1;
}
