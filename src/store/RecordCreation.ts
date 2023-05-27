import { create } from 'zustand'

import { StatusPositionVariablesProps } from './StaticData'

export type RecordProps = {
    Department: string
    Specialization: string
    Developers: string[]
    ProgrammingLanguage: string[]
    Stack: string[]
    DB: string[]
    Grade: string
    Language: string[]
    Description: string,
    Comment:string
}

export type ExpectationsProps = {
    Location: string,
    Salary: { min: string, max: string },
    Engagement: string[]
    WorkType: string[]
    ProvidingRelocation: string[]
    Contacts: {
        tel: string
        email: string
    }
    soc: Partial<{
        telegram: boolean
        whatsapp: boolean
    }>
}

type Props = {
    Position: string | StatusPositionVariablesProps
    PositionUpdate(val: StatusPositionVariablesProps): void

    Record: RecordProps
    RecordMutation(val: Partial<RecordProps>): void

    Name: string
    NameMutation(val: string): void

    Expectations: ExpectationsProps
    ExpectationsMutation(val: Partial<ExpectationsProps>): void

    IsAgree: boolean
    IsAgreeMutation(val: boolean): void

    Clean: () => void
}

export const useRecordCreation = create<Props>()(set => ({
    Position: 'Experience',
    PositionUpdate: (val) => set(() => ({
        Position: val
    })),


    Name: "",
    NameMutation: (val) => set({
        Name: val
    }),

    Record: {
        Department: "",
        Specialization: '',
        Developers: [],
        ProgrammingLanguage: [],
        Stack: [],
        DB: [],
        Grade: "",
        Language: [],
        Description: "",
        Comment: ""
    },
    RecordMutation: (val) => set(({ Record }) => ({
        Record: { ...Record, ...val }
    })),

    Expectations: {
        Location: "",
        Salary: { min: '', max: '' },
        Engagement: [],
        WorkType: [],
        ProvidingRelocation: [],
        Contacts: {
            tel: "",
            email: ""
        },
        soc: {
            telegram: false,
            whatsapp: false
        }
    },
    ExpectationsMutation: (val) => set(({ Expectations }) => ({
        Expectations: { ...Expectations, ...val }
    })),

    IsAgree: false,
    IsAgreeMutation: (val) => set(() => ({
        IsAgree: val
    })),

    Clean: () => set(state => ({
        Name: "",
        Record: {
            Department: "",
            Specialization: '',
            Developers: [],
            ProgrammingLanguage: [],
            Stack: [],
            DB: [],
            Grade: "",
            Language: [],
            Description: "",
            Comment:""
        },
        Expectations: {
            Location: "",
            Salary: { min: '', max: '' },
            Engagement: [],
            WorkType: [],
            ProvidingRelocation: [],
            Contacts: {
                tel: "",
                email: ""
            },
            soc: {
                telegram: false,
                whatsapp: false
            }
        }
    }))
}))