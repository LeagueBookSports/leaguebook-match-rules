// Baseball (MLB via API-Sports) — status short-codes.

export const BASEBALL_LIVE_STATUSES = [
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
] as const

export const BASEBALL_FINISHED_STATUSES = [
  'FT',
  'AET',
  'PEN',
  'FINAL',
  'FINISHED',
] as const

export function isBaseballLive(status: string | null | undefined): boolean {
  return (
    !!status && (BASEBALL_LIVE_STATUSES as readonly string[]).includes(status)
  )
}

export function isBaseballFinished(status: string | null | undefined): boolean {
  return (
    !!status &&
    (BASEBALL_FINISHED_STATUSES as readonly string[]).includes(status)
  )
}

export function getBaseballMatchStatusOrder(
  status: string | null | undefined,
): number {
  if (isBaseballLive(status)) return 0
  if (isBaseballFinished(status)) return 2
  return 1
}
