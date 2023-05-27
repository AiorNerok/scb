"use client";

import React, { useMemo, FC, useEffect } from "react";

import { useStaticData } from "@/store/StaticData";
import { useRecordCreation } from "@/store/RecordCreation";

import { Badge } from "@/components/Atoms";

function Experience() {
  const { MockData, DB, Grade, Language } = useStaticData();
  const { Record, RecordMutation, PositionUpdate } = useRecordCreation();

  let departmentList = useMemo(() => {
    let uniq: Set<string> = new Set();

    MockData.forEach((el) => {
      uniq.add(el.department);
    });

    return Array.from(uniq);
  }, [MockData]);

  let specializationList = useMemo(() => {
    if (Record.Department === "") {
      // RecordMutation()
    }
    let uniq: Set<string> = new Set();

    MockData.forEach((el) => {
      if (Record.Department === el.department) {
        uniq.add(el.specialization);
      }
    });

    return Array.from(uniq);
  }, [MockData, Record.Department]);

  let developersList = useMemo(() => {
    if (Record.Specialization === "") return null;

    const t: Set<string> = new Set();

    MockData.forEach((el) => {
      if (Record.Specialization === el.specialization) {
        t.add(el.developers);
      }
    });

    return Array.from(t);
  }, [Record.Specialization, MockData]);

  let programmingLanguageList = useMemo(() => {
    if (Record.Developers.length) {
      const t: Set<string> = new Set();

      MockData.forEach((el) => {
        if (Record.Developers.includes(el.developers)) {
          t.add(el.programmingLanguage);
        }
      });

      return Array.from(t);
    }
    return null;
  }, [Record.Developers, MockData]);

  let stackList = useMemo(() => {
    if (Record.ProgrammingLanguage.length) {
      const t: Set<string> = new Set();

      MockData.forEach((el) => {
        if (
          Record.ProgrammingLanguage.includes(el.programmingLanguage) &&
          Record.Developers.includes(el.developers)
        ) {
          t.add(el.stack);
        }
      });

      return Array.from(new Set(t));
    }
    return null;
  }, [Record.Developers, Record.ProgrammingLanguage, MockData]);

  useEffect(() => {
    if (Record.Specialization === "") {
      RecordMutation({
        Developers: [],
        ProgrammingLanguage: [],
        Stack: [],
        DB: [],
        Grade: "",
        Language: [],
        Description: "",
      });
    }
  }, [Record.Specialization, RecordMutation]);

  useEffect(() => {
    if (!Record.Developers.length) {
      RecordMutation({
        ProgrammingLanguage: [],
        Stack: [],
        DB: [],
        Grade: "",
        Language: [],
        Description: "",
      });
    }
  }, [Record.Developers.length, RecordMutation]);

  useEffect(() => {
    if (!Record.Stack.length) {
      RecordMutation({
        DB: [],
        Grade: "",
        Language: [],
        Description: "",
      });
    }
  }, [Record.Stack.length, RecordMutation]);

  useEffect(() => {
    if (!Record.DB.length) {
      RecordMutation({
        Grade: "",
        Language: [],
        Description: "",
      });
    }
  }, [Record.DB.length, RecordMutation]);

  return (
    <div>
      <div>
        Department
        <div className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black">
          <div className="flex flex-wrap gap-1">
            {Record.Department && (
              <Badge
                click={() =>
                  RecordMutation({
                    Department: "",
                    Specialization: "",
                    Developers: [""],
                    ProgrammingLanguage: [""],
                    Stack: [""],
                    DB: [""],
                    Grade: "",
                    Language: [""],
                    Description: "",
                  })
                }
                text={Record.Department}
              />
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {Record.Department.length < 1 &&
            departmentList.map((el) => (
              <Badge
                click={() => RecordMutation({ Department: el })}
                text={el}
                key={el}
              />
            ))}
        </div>
      </div>

      {Record.Department.length > 0 && specializationList && (
        <label>
          Specialization
          <div className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black">
            <div className="flex flex-wrap gap-1">
              {Record.Specialization && (
                <Badge
                  click={() => RecordMutation({ Specialization: "" })}
                  text={Record.Specialization}
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {Record.Specialization.length < 1 &&
              specializationList.map((el) => (
                <Badge
                  click={() => RecordMutation({ Specialization: el })}
                  text={el}
                  key={el}
                />
              ))}
          </div>
        </label>
      )}

      {Record.Specialization && developersList && (
        <label>
          Developers
          <div className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black">
            <div className="flex flex-wrap gap-1">
              {Record.Developers.map((el) => (
                <Badge
                  click={() =>
                    RecordMutation({
                      Developers: Record.Developers.filter(
                        (item) => item !== el
                      ),
                    })
                  }
                  text={el}
                  key={el}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {developersList
              .filter((el) => !Record.Developers.includes(el))
              .map((el) => (
                <Badge
                  click={() =>
                    RecordMutation({
                      Developers: [...Record.Developers, el],
                    })
                  }
                  text={el}
                  key={el}
                />
              ))}
          </div>
        </label>
      )}

      {Record.Developers && programmingLanguageList && (
        <label>
          Skills
          <div className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black">
            <div className="flex flex-wrap gap-1">
              {Record.ProgrammingLanguage.map((el) => {
                return (
                  <Badge
                    click={() =>
                      RecordMutation({
                        ProgrammingLanguage: Record.ProgrammingLanguage.filter(
                          (item) => item !== el
                        ),
                      })
                    }
                    text={el}
                    key={el}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {programmingLanguageList
              .filter((el) => !Record.ProgrammingLanguage.includes(el))
              .map((el) => (
                <Badge
                  click={() =>
                    RecordMutation({
                      ProgrammingLanguage: [...Record.ProgrammingLanguage, el],
                    })
                  }
                  text={el}
                  key={el}
                />
              ))}
          </div>
        </label>
      )}

      {Record.ProgrammingLanguage && stackList && (
        <label>
          Stack
          <div className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black">
            <div className="flex flex-wrap gap-1">
              {Record.Stack.map((el) => {
                return (
                  <Badge
                    click={() =>
                      RecordMutation({
                        Stack: Record.Stack.filter((item) => item !== el),
                      })
                    }
                    text={el}
                    key={el}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {stackList
              .filter((el) => !Record.Stack.includes(el))
              .map((el) => (
                <Badge
                  click={() =>
                    RecordMutation({
                      Stack: [...Record.Stack, el],
                    })
                  }
                  text={el}
                  key={el}
                />
              ))}
          </div>
        </label>
      )}

      {Record.Stack.length > 0 && (
        <label>
          Database
          <div className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black">
            <div className="flex flex-wrap gap-1">
              {Record.DB.map((el) => (
                <Badge
                  click={() =>
                    RecordMutation({
                      DB: Record.DB.filter((item) => item !== el),
                    })
                  }
                  text={el}
                  key={el}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {DB.filter((el) => !Record.DB.includes(el)).map((el) => (
              <Badge
                click={() => RecordMutation({ DB: [...Record.DB, el] })}
                text={el}
                key={el}
              />
            ))}
          </div>
        </label>
      )}

      {Record.Stack.length > 0 && Record.DB.length > 0 && (
        <label>
          Grade
          <div className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black">
            <div className="flex flex-wrap gap-1">
              {Record.Grade && (
                <Badge
                  click={() =>
                    RecordMutation({
                      Grade: "",
                    })
                  }
                  text={Record.Grade}
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {Record.Grade === "" &&
              Grade.filter((el) => !Record.Grade.includes(el)).map((el) => (
                <Badge
                  click={() => RecordMutation({ Grade: el })}
                  text={el}
                  key={el}
                />
              ))}
          </div>
        </label>
      )}

      {Record.Grade.length > 0 && Record.DB.length > 0 && (
        <label>
          Language
          <div className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black">
            <div className="flex flex-wrap gap-1">
              {Record.Language.map((el) => {
                return (
                  <Badge
                    click={() =>
                      RecordMutation({
                        Language: Record.Language.filter((item) => item !== el),
                      })
                    }
                    text={el}
                    key={el}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {Language.filter((el) => !Record.Language.includes(el)).map(
              (el) => (
                <Badge
                  click={() =>
                    RecordMutation({ Language: [...Record.Language, el] })
                  }
                  text={el}
                  key={el}
                />
              )
            )}
          </div>
        </label>
      )}

      {Record.Language.length > 0 && (
        <>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black"
            value={Record.Description}
            onChange={(e) => RecordMutation({ Description: e.target.value })}
          />

          <button
            onClick={() => PositionUpdate("Expectations")}
            type="button"
            className="hronit-shadow bg-[#CEFF1A] text-black w-[135px] px-8 py-3"
          >
            Continue
          </button>
        </>
      )}
    </div>
  );
}

export default React.memo(Experience);
