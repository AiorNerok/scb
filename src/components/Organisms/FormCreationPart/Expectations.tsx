"use client";

import React from "react";
import { IconPaperclip } from "@tabler/icons-react";
import { useRecordCreation } from "@/store/RecordCreation";
import { useStaticData } from "@/store/StaticData";
import { Badge } from "@/components/Atoms";

type Props = {};

export default function Expectations({}: Props) {
  const { Expectations, ExpectationsMutation, PositionUpdate } =
    useRecordCreation();
  const { Engagement, WorkType, ProvidingRelocation } = useStaticData();

  return (
    <>
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

      <label>
        Contacts
        <div className="flex flex-row gap-2">
          <input
            type="tel"
            className="border focus:outline-none px-4 py-2 w-full border-black"
            placeholder="Phone"
            value={Expectations.Contacts.tel}
            onChange={(e) => {
              let val = e.target.value;
              if (Number(val) || val === "") {
                ExpectationsMutation({
                  Contacts: { tel: val, email: Expectations.Contacts.email },
                });
              }
            }}
          />
          <input
            type="email"
            className="border focus:outline-none px-4 py-2 w-full border-black"
            placeholder="Email"
            value={Expectations.Contacts.email}
            onChange={(e) => {
              let val = e.target.value;
              ExpectationsMutation({
                Contacts: { email: val, tel: Expectations.Contacts.tel },
              });
            }}
          />
        </div>
      </label>
      <div>
        <div className="flex items-center mb-7 gap-4">
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="telegram"
                type="checkbox"
                value={""}
                checked={Expectations.soc.telegram}
                onChange={() =>
                  ExpectationsMutation({
                    soc: { telegram: !Expectations.soc.telegram },
                  })
                }
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label htmlFor="telegram" className="font-medium text-gray-900">
                Telegram
              </label>
            </div>
          </div>
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
              <input
                id="whatsapp"
                type="checkbox"
                value={""}
                checked={Expectations.soc.whatsapp}
                onChange={() =>
                  ExpectationsMutation({
                    soc: { whatsapp: !Expectations.soc.whatsapp },
                  })
                }
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6">
              <label htmlFor="whatsapp" className="font-medium text-gray-900">
                WhatsApp Men
              </label>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
