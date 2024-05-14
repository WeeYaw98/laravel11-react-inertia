import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/16/solid";

export default function TableHeading({
  attr,
  sortable = true,
  sort_field = null,
  sort_direction = null,
  sortChanged = () => {},
  children,
}) {
  return (
    <th onClick={(e) => sortChanged(attr)}>
      <div
        className={
          "px-3 py-3 flex items-center justify-between gap-1 " +
          (sortable ? "cursor-pointer" : "")
        }
      >
        <span>{children}</span>
        {sortable && (
          <div className="flex flex-col">
            <ChevronUpIcon
              className={
                "w-4 " +
                (sort_field === attr && sort_direction === "asc"
                  ? "text-white"
                  : "")
              }
            />
            <ChevronDownIcon
              className={
                "w-4 " +
                (sort_field === attr && sort_direction === "desc"
                  ? "text-white"
                  : "")
              }
            />
          </div>
        )}
      </div>
    </th>
  );
}
