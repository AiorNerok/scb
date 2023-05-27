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
      Description: "",
      Developers: ['Desktop'],
      Grade: "Jian Yang",
      Id: "05dc3d44-c0f0-4c79-b035-49af3522f4f1",
      Language: ['English', 'Yamete Kudasai'],
      ProgrammingLanguage: ['Java'],
      Specialization: "Developers",
      Stack: ['Java Core'],
      Title: "Desktop",
      isActive: true,
      Comment: "if you are reading this. Know. Everything will be alright. PS...Do not devalue your way. Good luck"
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
