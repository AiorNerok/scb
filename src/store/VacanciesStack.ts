import { create } from "zustand";

export type vacancies = {
  Id: string;
  Title: string;
  Department: string;
  Specialization: string;
  Developers: string[];
  ProgrammingLanguage: string[];
  Stack: string[];
  DB: string[];
  Grade: string;
  Language: string[];
  Description: string;
  Comment: string,
  isActive: boolean;
  Salary: { min: string, max: string },
  Engagement: string[]
  WorkType: string[]
  ProvidingRelocation: string[]

};

type Props = {
  vacanciesList: vacancies[];
  vacanciesListUpdate: (value: vacancies) => void;
  toggleStatusID: (id: string) => void
};

export const useStoreVacanciesStack = create<Props>()((set) => ({
  vacanciesList: [
    {
      DB: ['SQLite'],
      Department: "IT",
      Description: "We are looking for an experienced Full stack developer who is ready to join our team and help us create innovative web applications. Your main task will be to develop and maintain our projects from start to finish, including front-end, back-end and databases. We are looking for a candidate with a wide range of technical skills, including experience with programming languages ​​such as JavaScript, PHP, Python, Ruby and more. You should be familiar with various frameworks and libraries such as React, Angular, Vue.js, Node.js, Django and Laravel. In addition, we expect our candidate to be highly qualified in the field of databases, including experience with SQL and NoSQL. If you are ready to take on the challenge and work in a dynamic team, then we are waiting for your resume!",
      Developers: ['Desktop'],
      Grade: "Senior",
      Id: "05dc3d44-c0f0-4c79-b035-49af3522f4f1",
      Language: ['English', 'Yamete Kudasai'],
      ProgrammingLanguage: ['Java'],
      Specialization: "Developers",
      Stack: ['Java Core'],
      Title: "Desktop",
      isActive: true,
      Salary: { "min": "50000", "max": "60000" },
      Comment: "1. The opportunity to work on innovative projects and contribute to the development of technology.2. A wide range of technical tasks that will allow you to develop and improve your skills.3. Work in a dynamic team, where each team member has the opportunity to express their opinion and contribute to the project.4. Flexible work schedule and the ability to work remotely.5. Competitive salary and career opportunities in the company.",
      Engagement: ["Part Time"],
      ProvidingRelocation: ["Domestic only",
        "Ready to relocate"],
      WorkType: ["Office", "Remote"],
    },
    {
      DB: ['SQLite', "MongoDB"],
      Salary: { "min": "50000", "max": "60000" },
      Department: "IT",
      Description: "",
      Developers: ['FullStack'],
      Grade: "Senior",
      Id: "15dc3d44-c0f0-4c79-b035-49af3522f4f1",
      Language: ['English', 'Yamete Kudasai'],
      ProgrammingLanguage: ['JS/TS'],
      Specialization: "Developers",
      Stack: ['React', "Vue", "NodeJS"],
      Title: "FullStack",
      isActive: true,
      Comment: "if you are reading this. Know. Everything will be alright. PS...Do not devalue your way. Good luck",
      Engagement: ["Part Time"],
      ProvidingRelocation: ["Domestic only",
        "Ready to relocate"],
      WorkType: ["Office", "Remote"],
    }
  ],
  vacanciesListUpdate: (value) =>
    set((state) => ({
      vacanciesList: [...state.vacanciesList, value],
    })),
  toggleStatusID: (id) =>
    set(({ vacanciesList }) => ({
      vacanciesList: vacanciesList.map((el) => {
        if (el.Id === id) {
          el.isActive = !el.isActive;
        }
        return el;
      }),
    })),

}));
