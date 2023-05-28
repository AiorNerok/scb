import { Badge } from "@/components/Atoms";
import { useRecordCreation } from "@/store/RecordCreation";
import { IconBrandTelegram, IconBrandWhatsapp } from "@tabler/icons-react";

type Props = {
  BeforeBegin?: React.ReactNode;
  AfterEnd?: React.ReactNode;
};

export default function Publication({ BeforeBegin, AfterEnd }: Props) {
  const {
    Record: {
      Department,
      Specialization,
      Grade,
      ProgrammingLanguage,
      Stack,
      Description,
      DB,
      Developers,
      Language,
    },
    Name,
    Expectations: {
      Contacts,
      Engagement,
      Location,
      ProvidingRelocation,
      Salary,
      WorkType,
      soc,
    },
  } = useRecordCreation();

  return (
    <>
      {BeforeBegin}
      <div className="flex gap-5 flex-col">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-semibold">{Name}</h1>
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
              Location,
              ...ProvidingRelocation,
              ...WorkType,
            ].map((el) => (
              <Badge text={el} key={el} />
            ))}
          </div>
          <div>
            {Contacts.tel && <Badge text={Contacts.tel} />}
            {Contacts.email && <Badge text={Contacts.email} />}
          </div>
          <div className="flex gap-3">
            {soc && (
              <>
                {soc.telegram && (
                  <span>
                    <IconBrandTelegram size={30} />
                  </span>
                )}
                {soc.whatsapp && (
                  <span>
                    <IconBrandWhatsapp size={30} />
                  </span>
                )}
              </>
            )}
          </div>
          <div>
            {(Salary.min || Salary.max) && (
              <>
                <span>Salary: </span>
                {Salary.min !== "" && <Badge text={`from ${Salary.min}`} />}
                {Salary.max !== "" && <Badge text={`before ${Salary.max}`} />}
              </>
            )}
          </div>
        </div>
      </div>
      {AfterEnd}
    </>
  );
}
