import { create } from 'zustand'
import { RecordProps, ExpectationsProps } from './RecordCreation'

type RecordProp = { ID: string, Name: string, img?: string } & ExpectationsProps & RecordProps

type Props = {
    Record: RecordProp[]
    RecordMutation(val: RecordProp): void
}

export const useRecordStack = create<Props>()(set => ({
    Record: [
        {
            img: "https://images.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/86943/1647027409-895-3252/image_2022-03-12_003630_large.png",
            ID: "08ad8f16-ecfb-4aef-a1df-8ba2b2c8f3cd",
            Name: "Gilfloy",
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
            WorkType: ["Office", "Remote"]
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
            Description: "One of the creators PedoChat && PedoDuduchnik.",
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
            WorkType: ["Office", "Remote"]
        }
    ],
    RecordMutation: (val) => set(({ Record }) => ({
        Record: [...Record, val]
    }))
}))






