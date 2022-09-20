import { expect, test, vi } from 'vitest'
import { useCountDown } from './index'

test('useCountDown', () => {
    const time = 4;
    const { currentTimeRef, resume } = useCountDown(time)
    expect(currentTimeRef.value).toBe(0)

    vi.useFakeTimers() // 启用模拟计时器

    resume()
    expect(currentTimeRef.value).toBe(time)
    vi.advanceTimersByTime(1000)
    expect(currentTimeRef.value).toBe(time - 1)
    vi.advanceTimersByTime(1000 * (time - 1))
    expect(currentTimeRef.value).toBe(0)
    vi.advanceTimersByTime(1000)
    expect(currentTimeRef.value).toBe(0)

    resume()
    expect(currentTimeRef.value).toBe(time)
    vi.advanceTimersByTime(1000)
    expect(currentTimeRef.value).toBe(time - 1)

    resume()
    expect(currentTimeRef.value).toBe(time)
}, 6000)