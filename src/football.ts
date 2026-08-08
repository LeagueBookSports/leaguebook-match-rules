// Football (soccer) — API-Football status short-codes.
// One source of truth: both leaguebook-frontend and leaguebook-mobile
// consume this file. Do not duplicate these lists back into either app.

export type FootballStatusShort =
  // live / in-progress
  | '1H'
  | 'HT'
  | '2H'
  | 'ET'
  | 'BT'
  | 'P'
  | 'LIVE'
  | 'INT'
  | 'SUSP'
  // finished
  | 'FT'
  | 'AET'
  | 'PEN'
  | 'AWD'
  | 'WO'
  // not started
  | 'TBD'
  | 'NS'
  // not played (postponed / cancelled / abandoned)
  | 'PST'
  | 'CANC'
  | 'ABD'

export type FootballMatchState =
  | 'live'
  | 'finished'
  | 'upcoming'
  | 'notPlayed'
  | 'unknown'

export const FOOTBALL_LIVE_STATUSES: FootballStatusShort[] = [
  '1H',
  'HT',
  '2H',
  'ET',
  'BT',
  'P',
  'LIVE',
  'INT',
  'SUSP',
]

export const FOOTBALL_FINISHED_STATUSES: FootballStatusShort[] = [
  'FT',
  'AET',
  'PEN',
  'AWD',
  'WO',
]

export const FOOTBALL_UPCOMING_STATUSES: FootballStatusShort[] = ['TBD', 'NS']

export const FOOTBALL_NOT_PLAYED_STATUSES: FootballStatusShort[] = [
  'PST',
  'CANC',
  'ABD',
]

export function isFootballLive(status: string | null | undefined): boolean {
  return !!status && (FOOTBALL_LIVE_STATUSES as string[]).includes(status)
}

export function isFootballFinished(status: string | null | undefined): boolean {
  return !!status && (FOOTBALL_FINISHED_STATUSES as string[]).includes(status)
}

export function isFootballUpcoming(status: string | null | undefined): boolean {
  return !!status && (FOOTBALL_UPCOMING_STATUSES as string[]).includes(status)
}

export function isFootballNotPlayed(status: string | null | undefined): boolean {
  return !!status && (FOOTBALL_NOT_PLAYED_STATUSES as string[]).includes(status)
}

export function getFootballMatchState(
  status: string | null | undefined,
): FootballMatchState {
  if (isFootballLive(status)) return 'live'
  if (isFootballFinished(status)) return 'finished'
  if (isFootballUpcoming(status)) return 'upcoming'
  if (isFootballNotPlayed(status)) return 'notPlayed'
  return 'unknown'
}

// Sort order: live → upcoming → finished → not-played/unknown.
export function getFootballMatchStatusOrder(
  status: string | null | undefined,
): number {
  if (isFootballLive(status)) return 0
  if (isFootballUpcoming(status)) return 1
  if (isFootballFinished(status)) return 2
  return 3
}
