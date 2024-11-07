import { $fetch, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('app', async () => {
  await setup()

  it('check nuxt ui colors', async () => {
    const html = await $fetch('/')
    expect(html).toContain('--ui-color-primary-500: var(--color-violet-500);')
    expect(html).toContain('--ui-color-secondary-500: var(--color-blue-500);')
    expect(html).toContain('--ui-color-success-500: var(--color-green-500);')
    expect(html).toContain('--ui-color-info-500: var(--color-blue-500);')
    expect(html).toContain('--ui-color-warning-500: var(--color-yellow-500);')
    expect(html).toContain('--ui-color-error-500: var(--color-red-500);')
    expect(html).toContain('--ui-color-neutral-500: var(--color-zinc-500);')
  })
})
