// Basketball — API-Basketball status short-codes.

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
