import { create } from 'zustand'

type Props = {
    hrefLink: string
    upd: (s: string) => void
}

export const ActiveLink = create<Props>()(set => ({
    hrefLink: '',
    upd: (s) => set({
        hrefLink: s
    })
}))