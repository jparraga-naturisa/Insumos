const KV_BASE = 'https://naturisa-proxy.parragajonathan965.workers.dev/kv/'

export async function kvPush<T>(key: string, data: T): Promise<void> {
  if (import.meta.env.DEV) return

  await fetch(`${KV_BASE}${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

export async function kvPull<T>(key: string): Promise<T | null> {
  if (import.meta.env.DEV) return null

  const response = await fetch(`${KV_BASE}${key}?_t=${Date.now()}`, { cache: 'no-store' })
  if (!response.ok) return null
  return response.json() as Promise<T>
}
