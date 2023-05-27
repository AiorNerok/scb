import { create } from 'zustand'
import { RecordProps, ExpectationsProps } from './RecordCreation'

export type RecordProp = { ID: string, Name: string, img?: string, isBest?: boolean } & ExpectationsProps & RecordProps

type Props = {
    Record: RecordProp[]
    RecordMutation(val: RecordProp): void
    toggleBest: (id: string) => void
}

export const useRecordStack = create<Props>()(set => ({
    Record: [
        {
            img: "https://images.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/86943/1647027409-895-3252/image_2022-03-12_003630_large.png",
            ID: "08ad8f16-ecfb-4aef-a1df-8ba2b2c8f3cd",
            Name: "Gilfoyle",
            Department: "IT",
            Specialization: "Developers",
            Developers: [
                "Desktop"
            ],
            ProgrammingLanguage: [
                "C++",
                "Java"
            ],
            Stack: [
                "Java Core",
                "Kernel",
                "Java EE",
                "Qt"
            ],
            DB: [
                "SQLite",
                "Amazon DynamoDB",
                "MongoDB",
                "Neo4j",
                "Redis",
                "PostgreSQL"
            ],
            Grade: "Sin",
            Language: [
                "English",
                "Yamete Kudasai"
            ],
            Description: "One of the creators PedoDuduchnik. Dinash go to hell",
            Location: "Canada",
            Salary: {
                min: "50000",
                max: "60000"
            },
            Contacts: { email: 'DineshNotMyFriends@=).su', tel: '888888' },
            Engagement: ["Part Time"],
            ProvidingRelocation: ["Domestic only",
                "Ready to relocate"],
            soc: {},
            WorkType: ["Office", "Remote"],
            Comment: '',
            isBest: false
        },
        {
            img: "data:image/jpeg;base64,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",
            ID: "08ad8f16-ewwb-4aef-a1df-8ba2b2c8f3cd",
            Name: "Шамиль",
            Department: "IT",
            Specialization: "Developers",
            Developers: [
                "Desktop"
            ],
            ProgrammingLanguage: [
                "C++",
                "Java"
            ],
            Stack: [
                "Java Core",
                "Kernel",
                "Java EE",
                "Qt"
            ],
            DB: [
                "SQLite",
                "Amazon DynamoDB",
                "MongoDB",
            ],
            Grade: "Sin",
            Language: [
                "Yamete Kudasai"
            ],
            Description: "Senior HTML/CSS Аrchitect",
            Location: "Canada",
            Salary: {
                min: "50000",
                max: "60000"
            },
            Contacts: { email: '', tel: '111111111111111' },
            Engagement: ["Part Time"],
            ProvidingRelocation: ["Domestic only",
                "Ready to relocate"],
            soc: {},
            WorkType: ["Office", "Remote"],
            Comment: '',
            isBest: false
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Kumail_Nanjiani_by_Gage_Skidmore_2.jpg",
            ID: "08ad8f16b-4aef-a1df-8ba2b2c8f3cd",
            Name: "Dinash",
            Department: "IT",
            Specialization: "Developers",
            Developers: [
                "Desktop"
            ],
            ProgrammingLanguage: [
                "C++",
                "Java"
            ],
            Stack: [
                "Java Core",
                "Kernel",
                "Java EE",
                "Qt"
            ],
            DB: [
                "SQLite",
                "Amazon DynamoDB",
                "MongoDB",
                "Neo4j",
                "Redis",
                "PostgreSQL"
            ],
            Grade: "Gilfoyle",
            Language: [
                "English",
                "Yamete Kudasai"
            ],
            Description: "One of the creators PedoChat && PedoDuduchnik. Gilfoyle and I are best friends =)",
            Location: "Canada",
            Salary: {
                min: "50000",
                max: "60000"
            },
            Contacts: { email: 'GilfloyMyFriends@=).su', tel: '888888' },
            Engagement: ["Part Time"],
            ProvidingRelocation: ["Domestic only",
                "Ready to relocate"],
            soc: {},
            WorkType: ["Office", "Remote"],
            Comment: '',
            isBest: false
        },

    ],
    RecordMutation: (val) => set(({ Record }) => ({
        Record: [...Record, val]
    })),
    toggleBest: (id) => set(({ Record }) => {
        let i = Record.filter(el => {
            if (el.ID === id) {
                el.isBest = !el.isBest
            }
            return el
        })
        return {
            Record: i
        }
    })
}))






