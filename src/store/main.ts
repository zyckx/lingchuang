import { defineStore } from 'pinia'

export const useStore = defineStore(
    'main',
    () => {
        const someState = ref('你好 pinia')
        return { someState }
    },
    {
        // @ts-ignore
        persist: true,
    },
)