"use client";

import { Badge } from "@/components";
import { useStoreVacanciesStack } from "@/store/VacanciesStack";
import { redirect, useRouter } from "next/navigation";

export default function Page({ params }: { params: { response: string } }) {
  const { vacanciesList } = useStoreVacanciesStack();
  const router = useRouter();
  const data = vacanciesList.filter((el) => el.Id === params.response);
  
  if (data.length === 0) {
    redirect("/");
  }
  
  const {
    Title,
    Department,
    Specialization,
    Grade,
    ProgrammingLanguage,
    Stack,
    DB,
    Description,
    Developers,
    Language,
    Salary,
    Engagement,
    WorkType,
    ProvidingRelocation,
    Comment,
  } = data[0];


  
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-prime-bg">
      <div className="p-20 max-w-[900px] space-y-4 flex flex-col min-w-[800px] min-h-[650px] items-center rounded-2xl border bg-white hronit-shadow">
        <div className="flex gap-5 mb-11 flex-col">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-semibold">{Title}</h1>
            <div className="flex flex-wrap gap-2">
              {[
                Department,
                Specialization,
                Grade,
                ...ProgrammingLanguage,
                ...Stack,
              ].map((el) => (
                <Badge text={el} key={crypto.randomUUID()} />
              ))}
            </div>
          </div>
          <div className="break-words">{Description}</div>
          <div className="space-y-3">
            <h2>Requirements</h2>
            <div className="flex flex-wrap gap-1">
              {[
                ...DB,
                ...Developers,
                ...Language,
                ...Engagement,
                ...ProvidingRelocation,
                ...WorkType,
              ].map((el) => (
                <Badge text={el} key={el} />
              ))}
            </div>
            <div className="flex gap-3">
              {(Salary.min || Salary.max) && (
                <>
                  <span>Salary: </span>
                  {Salary.min !== "" && <Badge text={`from ${Salary.min}`} />}
                  {Salary.max !== "" && <Badge text={`before ${Salary.max}`} />}
                </>
              )}
            </div>
          </div>
          <div className="break-words">{Comment}</div>
        </div>
        <button
          onClick={() => {
            localStorage.setItem(
              "id_vacancies",
              JSON.stringify(params.response)
            );
            router.push("/");
          }}
          type="button"
          className="w-full hronit-shadow  disabled:bg-gray-300 bg-[#CEFF1A] text-black px-8 py-3"
        >
          Respond
        </button>
      </div>
    </div>
  );
}
