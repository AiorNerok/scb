import Image from "next/image";

export const UserProfile = () => {
  return (
    <div className="flex gap-x-4">
      <Image
        className="h-12 w-12 flex-none rounded-full bg-gray-50"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
        alt=""
        width={46}
        height={46}
      />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">
          Leslie Alexander
        </p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
          leslie.alexander@example.com
        </p>
      </div>
    </div>
  );
};
