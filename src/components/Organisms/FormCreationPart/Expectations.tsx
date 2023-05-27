"use client";

import React from "react";
import { useRecordCreation } from "@/store/RecordCreation";
import { useStaticData } from "@/store/StaticData";
import { Badge } from "@/components/Atoms";

type Props = {
  BeforeBegin?: React.ReactNode;
  AfterEnd?: React.ReactNode;
};

export default function Expectations({ AfterEnd, BeforeBegin }: Props) {
  const { Expectations, ExpectationsMutation } = useRecordCreation();
  const { Engagement, WorkType, ProvidingRelocation } = useStaticData();

  return (
    <>
      {BeforeBegin}
      <label>
        Location
        <input
          type="text"
          className="border focus:outline-none px-4 py-2 w-full border-black"
          placeholder="Location"
          value={Expectations.Location}
          onChange={(e) => ExpectationsMutation({ Location: e.target.value })}
        />
      </label>
      <label>
        Salary
        <div className="flex flex-row gap-2">
          <input
            type="text"
            className="border focus:outline-none px-4 py-2 w-full border-black"
            placeholder="Min"
            value={Expectations.Salary.min}
            onChange={(e) => {
              let val = e.target.value;
              if (Number(val) || val === "") {
                ExpectationsMutation({
                  Salary: { min: val, max: Expectations.Salary.max },
                });
              }
            }}
          />
          <input
            type="text"
            className="border focus:outline-none px-4 py-2 w-full border-black"
            placeholder="Max"
            value={Expectations.Salary.max}
            onChange={(e) => {
              let val = e.target.value;
              if (Number(val) || val === "") {
                ExpectationsMutation({
                  Salary: { max: val, min: Expectations.Salary.min },
                });
              }
            }}
          />
        </div>
      </label>

      <label>
        Engagement
        <div className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black">
          <div className="flex flex-wrap gap-1">
            {Expectations.Engagement.map((el) => {
              return (
                <Badge
                  click={() =>
                    ExpectationsMutation({
                      Engagement: Expectations.Engagement.filter(
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
          {Engagement.filter((el) => !Expectations.Engagement.includes(el)).map(
            (el) => (
              <Badge
                click={() =>
                  ExpectationsMutation({
                    Engagement: [...Expectations.Engagement, el],
                  })
                }
                text={el}
                key={el}
              />
            )
          )}
        </div>
      </label>
      <label>
        Work Type
        <div className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black">
          <div className="flex flex-wrap gap-1">
            {Expectations.WorkType.map((el) => {
              return (
                <Badge
                  click={() =>
                    ExpectationsMutation({
                      WorkType: Expectations.WorkType.filter(
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
          {WorkType.filter((el) => !Expectations.WorkType.includes(el)).map(
            (el) => (
              <Badge
                click={() =>
                  ExpectationsMutation({
                    WorkType: [...Expectations.WorkType, el],
                  })
                }
                text={el}
                key={el}
              />
            )
          )}
        </div>
      </label>

      <label>
        Providing Relocation
        <div className="border min-h-[42px] px-4 py-2 w-full mb-4 border-black">
          <div className="flex flex-wrap gap-1">
            {Expectations.ProvidingRelocation.map((el) => {
              return (
                <Badge
                  click={() =>
                    ExpectationsMutation({
                      ProvidingRelocation:
                        Expectations.ProvidingRelocation.filter(
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
          {ProvidingRelocation.filter(
            (el) => !Expectations.ProvidingRelocation.includes(el)
          ).map((el) => (
            <Badge
              click={() =>
                ExpectationsMutation({
                  ProvidingRelocation: [
                    ...Expectations.ProvidingRelocation,
                    el,
                  ],
                })
              }
              text={el}
              key={el}
            />
          ))}
        </div>
      </label>

      {AfterEnd}
    </>
  );
}
