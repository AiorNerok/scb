import { create } from 'zustand'

export type JobStatus = "Active" | "Completed"

type Props = {
    status: JobStatus
    toggleStatus: (val: JobStatus) => void
}

export const useStoreJobStatus = create<Props>()(set => ({
    status: "Active",
    toggleStatus: (val) => set({ status: val })
}))