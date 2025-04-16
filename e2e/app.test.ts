import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('app', async () => {
  await setup()

  it('check nuxt ui colors', async () => {
    const html = await $fetch('/')
    expect(html).toContain('--ui-color-primary-500: var(--color-violet-500, oklch(60.6% 0.25 292.717));')
    expect(html).toContain('--ui-color-secondary-500: var(--color-blue-500, oklch(62.3% 0.214 259.815));')
    expect(html).toContain('--ui-color-success-500: var(--color-green-500, oklch(72.3% 0.219 149.579));')
    expect(html).toContain('--ui-color-info-500: var(--color-blue-500, oklch(62.3% 0.214 259.815));')
    expect(html).toContain('--ui-color-warning-500: var(--color-yellow-500, oklch(79.5% 0.184 86.047));')
    expect(html).toContain('--ui-color-error-500: var(--color-red-500, oklch(63.7% 0.237 25.331));')
    expect(html).toContain('--ui-color-neutral-500: var(--color-zinc-500, oklch(55.2% 0.016 285.938));')
  })
})
