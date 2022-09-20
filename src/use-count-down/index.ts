import { useIntervalFn } from '@vueuse/core'
import { ref, onBeforeUnmount } from 'vue-demi'

/**
 * 倒计时
 * @param time 时间，单位: 秒
 * @returns 
 */
export function useCountDown(time: number) {
    const currentTimeRef = ref(0);

    const { pause, resume } = useIntervalFn(() => {
        currentTimeRef.value -= 1
        if (currentTimeRef.value == 0) {
            pause()
        }
    }, 1000, {
        immediate: false
    })
    onBeforeUnmount(() => {
        pause()
    })
    return {
        currentTimeRef,
        pause,
        resume: () => {
            pause()
            currentTimeRef.value = time
            resume()
        },
    }
}

