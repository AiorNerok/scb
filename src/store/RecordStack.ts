import { create } from 'zustand'
import { RecordProps, ExpectationsProps } from './RecordCreation'

export type RecordProp = { ID: string, Name: string, img?: string, isBest?: boolean, id_vacancies: string } & ExpectationsProps & RecordProps

type Props = {
    Record: RecordProp[]
    RecordMutation(val: RecordProp): void
    toggleBest: (id: string) => void
    DelReacord: (id: string) => void
}

export const useRecordStack = create<Props>()(set => ({
    Record: [
        {
            img: "https://media.istockphoto.com/id/685132245/photo/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=OJk6U-oCZ31F3TGmarAAg2jVli8ZWTagAcF4P-kNIqA=",
            ID: "08ad28f16-ecfb-4aef-a1df-8ba2b2c8f3dcd",
            Name: "Jone",
            Department: "IT",
            Specialization: "Developers",
            Developers: [
                "Frontend"
            ],
            ProgrammingLanguage: [
                "Frontend"
            ],
            Stack: [
                "React", "Ember.js"
            ],
            DB: [
                "MongoDB"
            ],
            Grade: "Middle",
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
            isBest: false,
            id_vacancies: "123312dwqw-awdqwfqwf-csacascawq"
        },
        {
            img: "data:image/jpeg;base64,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",
            ID: "08ad28f16-ecfb-4aef-a1df-8ba2b2c8f3cd",
            Name: "Dima",
            Department: "IT",
            Specialization: "Developers",
            Developers: [
                "Frontend"
            ],
            ProgrammingLanguage: [
                "Frontend"
            ],
            Stack: [
                "React", "Ember.js"
            ],
            DB: [
                "MongoDB"
            ],
            Grade: "Middle",
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
            isBest: false,
            id_vacancies: "123312dwqw-awdqwfqwf-csacascawq"
        },
        {
            img: "data: image / jpeg; base64,/ 9j / 4AAQSkZJRgABAQAAAQABAAD / 2wCEAAoHCBYVFRgVFhYZGBgaHRwaGhgaHBgaGhwaHBoaHBocGhocIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf / AABEIAKsBJwMBIgACEQEDEQH / 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",
            ID: "08ad8fe16-ecfb-4aef-a1df-8ba2b2c8f3cd",
            Name: "Mike",
            Department: "IT",
            Specialization: "Developers",
            Developers: [
                "Frontend"
            ],
            ProgrammingLanguage: [
                "Frontend"
            ],
            Stack: [
                "React", "Ember.js"
            ],
            DB: [
                "MongoDB"
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
            isBest: false,
            id_vacancies: "123312dwqw-awdqwfqwf-csacascawq"
        },
        {
            img: "data:image/jpeg;base64,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",
            ID: "08ad8f16-ecfb-4aeqf-a1df-8ba2b2c8f3cd",
            Name: "Bob",
            Department: "IT",
            Specialization: "Developers",
            Developers: [
                "Frontend"
            ],
            ProgrammingLanguage: [
                "Frontend"
            ],
            Stack: [
                "React", "Ember.js"
            ],
            DB: [
                "MongoDB"
            ],
            Grade: "Senior",
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
            isBest: false,
            id_vacancies: "123312dwqw-awdqwfqwf-csacascawq"
        }, {
            img: "https://images.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/86943/1647027409-895-3252/image_2022-03-12_003630_large.png",
            ID: "08ad8f16-ecfb-4adef-a1df-8ba2b2c8f3cd",
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
            isBest: false,
            id_vacancies: "05dc3d44-c0f0-4c79-b035-49af3522f4f1"
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
            isBest: false,
            id_vacancies: "15dc3d44-c0f0-4c79-b035-49af3522f4f1"
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
            Grade: "Senior",
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
            isBest: false,
            id_vacancies: "15dc3d44-c0f0-4c79-b035-49af3522f4f1"
        },

    ],
    RecordMutation: (val) => set(({ Record }) => ({
        Record: [...Record, val]
    })),
    DelReacord: (id) => set(({ Record }) => {
        let r = Record.filter(el => el.ID !== id)

        return {
            Record: r
        }
    }),
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






