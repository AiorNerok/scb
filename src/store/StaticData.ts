import { create } from 'zustand'

export type mockDataContainerProps<T> = {
    department: T
    specialization: T
    developers: T
    programmingLanguage: T
    stack: T
}

export type StatusPositionVariablesProps = "Experience" | "Expectations" | "Publication"
export type EngagementProps = 'Full Time' | "Part Time"
export type WorkTypeProps = "Office" | "Remote" | "Hybrid"
export type ProvidingRelocationProps = "Only in the region" | "Ready to relocate" | "Domestic only"

export type Props<T> = {
    MockData: mockDataContainerProps<T>[]
    DB: T[]
    Grade: T[]
    StatusPositionFilter: StatusPositionVariablesProps[]
    Language: T[],
    Engagement: EngagementProps[]
    WorkType: WorkTypeProps[]
    ProvidingRelocation: ProvidingRelocationProps[]

}

export const useStaticData = create<Props<string>>()((set) => ({
    MockData: [
        { "department": "IT", "specialization": "Developers", "developers": "Desktop", "stack": "Java Core", "programmingLanguage": "Java" },
        { "department": "IT", "specialization": "Developers", "developers": "Desktop", "stack": "Java EE", "programmingLanguage": "Java" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Spring", "programmingLanguage": "Java" },
        { "department": "IT", "specialization": "Developers", "developers": "Frontend", "stack": "Angular", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Angular", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Frontend", "stack": "React", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "React", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Frontend", "stack": "Vue.Js", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Vue.Js", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Node.Js", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Frontend", "stack": "jQuery", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "jQuery", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Tornado", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Aiohttp", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Flask", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Django", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "Mobile", "stack": "Falcon", "programmingLanguage": "Kotlin" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Asyncio", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "Desktop", "stack": ".Net Core", "programmingLanguage": "C#" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "ASP.Net", "programmingLanguage": "C#" },
        { "department": "IT", "specialization": "Developers", "developers": "Desktop", "stack": "WPF", "programmingLanguage": "C#" },
        { "department": "IT", "specialization": "Developers", "developers": "Desktop", "stack": "Entity", "programmingLanguage": "C#" },
        { "department": "IT", "specialization": "Developers", "developers": "Desktop", "stack": "Kernel", "programmingLanguage": "C++" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Yii/Yii2", "programmingLanguage": "PHP" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Laravel", "programmingLanguage": "PHP" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Symfony", "programmingLanguage": "PHP" },
        { "department": "IT", "specialization": "Developers", "developers": "Mobile", "stack": "RxSwift", "programmingLanguage": "Swift" },
        { "department": "IT", "specialization": "Developers", "developers": "Mobile", "stack": "CoreData", "programmingLanguage": "Swift" },
        { "department": "IT", "specialization": "Developers", "developers": "Mobile", "stack": "Flutter", "programmingLanguage": "Dart" },
        { "department": "IT", "specialization": "Developers", "developers": "Mobile", "stack": "PhoneGap", "programmingLanguage": "Java" },
        { "department": "IT", "specialization": "Developers", "developers": "Mobile", "stack": "React Native", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Ruby on Rails", "programmingLanguage": "Ruby" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Express.js", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Frontend", "stack": "Ember.js", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Ember.js", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "CakePHP", "programmingLanguage": "PHP" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "Meteor", "programmingLanguage": "PHP" },
        { "department": "IT", "specialization": "Developers", "developers": "Mobile", "stack": "Ionic", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Desktop", "stack": "Electron", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "NestJS", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Desktop", "stack": "Qt", "programmingLanguage": "C++" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": "FastAPI", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "Frontend", "stack": "Hapi.js", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Hapi.js", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "Backend", "stack": ".Net", "programmingLanguage": "C#" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Spring", "programmingLanguage": "Java" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Node.Js", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Tornado", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Aiohttp", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Flask", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Django", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Asyncio", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "ASP.Net", "programmingLanguage": "C#" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Yii/Yii2", "programmingLanguage": "PHP" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Laravel", "programmingLanguage": "PHP" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Symfony", "programmingLanguage": "PHP" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Ruby on Rails", "programmingLanguage": "Ruby" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Express.js", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "CakePHP", "programmingLanguage": "PHP" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "Meteor", "programmingLanguage": "PHP" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "NestJS", "programmingLanguage": "JS/TS" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": "FastAPI", "programmingLanguage": "Python" },
        { "department": "IT", "specialization": "Developers", "developers": "FullStack", "stack": ".Net", "programmingLanguage": "C#" }

    ],
    DB: ["Oracle", "PostgreSQL", "MySQL", "Microsoft SQL Server", "IBM DB2", "SQLite", "MongoDB", "Cassandra", "Redis", "MariaDB", "Amazon Aurora", "Amazon DynamoDB", "Couchbase", "Neo4j", "Informix", "Teradata", "SAP HANA", "Apache HBase", "Apache Phoenix", "Google Cloud Spanner"],
    Grade: ["Junior", "Middle", "Senior", "Lead", "Elliot Alderson"],
    Language: ["English", "NeEnglish", "Yamete Kudasai"],
    StatusPositionFilter: ["Experience", "Expectations", "Publication"],
    Engagement: ['Full Time', "Part Time"],
    WorkType: ['Hybrid', "Office", "Remote"],
    ProvidingRelocation: ["Domestic only", "Only in the region", "Ready to relocate"]
}))
