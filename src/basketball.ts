// Basketball — API-Basketball status short-codes + league priority.

export type BasketballStatusShort =
  | 'NS'
  | 'Q1'
  | 'Q2'
  | 'Q3'
  | 'Q4'
  | 'OT'
  | 'BT'
  | 'HT'
  | 'FT'
  | 'AOT'
  | 'CANC'
  | 'SUSP'
  | 'POST'
  | 'ABD'

export const BASKETBALL_LIVE_STATUSES: BasketballStatusShort[] = [
  'Q1',
  'Q2',
  'Q3',
  'Q4',
  'OT',
  'BT',
  'HT',
]

export const BASKETBALL_FINISHED_STATUSES: BasketballStatusShort[] = [
  'FT',
  'AOT',
]

export const BASKETBALL_UPCOMING_STATUSES: BasketballStatusShort[] = ['NS']

export const BASKETBALL_NOT_PLAYED_STATUSES: BasketballStatusShort[] = [
  'CANC',
  'SUSP',
  'POST',
  'ABD',
]

export function isBasketballLive(status: string | null | undefined): boolean {
  return !!status && (BASKETBALL_LIVE_STATUSES as string[]).includes(status)
}

export function isBasketballFinished(
  status: string | null | undefined,
): boolean {
  return !!status && (BASKETBALL_FINISHED_STATUSES as string[]).includes(status)
}

export function isBasketballUpcoming(
  status: string | null | undefined,
): boolean {
  return !!status && (BASKETBALL_UPCOMING_STATUSES as string[]).includes(status)
}

export function isBasketballNotPlayed(
  status: string | null | undefined,
): boolean {
  return !!status && (BASKETBALL_NOT_PLAYED_STATUSES as string[]).includes(status)
}

export function getBasketballMatchStatusOrder(
  status: string | null | undefined,
): number {
  if (isBasketballLive(status)) return 0
  if (isBasketballFinished(status)) return 1
  return 2
}

// League IDs ordered by display priority (NBA always first).
export const BASKETBALL_LEAGUE_PRIORITY: number[] = [
  12, // NBA
  13, // WNBA (NBA W)
  120, // EuroLeague
  117, // NBL (Australia)
  116, // BSL (Turkey)
  119, // Liga ACB (Spain)
  118, // LNB Pro A (France)
  124, // BBL (Germany)
]

// Name-based fallback in case the backend returns an unexpected ID.
const BASKETBALL_PRIORITY_NAMES: string[] = [
  'nba',
  'wnba',
  'nba w',
  'euroleague',
  'nbl',
  'bsl',
  'liga acb',
  'lnb',
  'bbl',
]

export function getBasketballLeaguePriority(id: number, name?: string): number {
  const idIdx = BASKETBALL_LEAGUE_PRIORITY.indexOf(id)
  if (idIdx !== -1) return idIdx

  if (name) {
    const nameIdx = BASKETBALL_PRIORITY_NAMES.findIndex(
      (n) => n === name.toLowerCase(),
    )
    if (nameIdx !== -1) return nameIdx
  }

  // Unknown leagues sort after all known ones.
  return 9999
}
