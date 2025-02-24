import { useState, useRef } from "react";
import useOutsideClick from "../hooks/useoutsideClick";
import { StatusFilterProps } from "../types/filter";

const StatusFilter = ({
  selectedStatus,
  setSelectedStatus,
}: StatusFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const statusOptions = ["All", "Ended", "Running", "To Be Determined"];
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleStatusChange = (status: string) => {
    setSelectedStatus(selectedStatus === status ? "" : status);
  };

  // Close dropdown when clicking outside
  useOutsideClick(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-xl bg-neutral-300 px-5 py-2 text-[14px] text-neutral-700/75 transition-all duration-300 hover:cursor-pointer hover:bg-neutral-300/70 dark:bg-gray-600/30 dark:text-neutral-300 dark:hover:bg-gray-600 ${selectedStatus && selectedStatus !== "All" ? "ring-3 ring-neutral-400/80" : ""}`}
      >
        Status filter
      </button>

      {/* Dropdown list div */}
      {isOpen && (
        <div className="bg-main-light dark:bg-main-dark absolute left-1/2 z-10 mt-5 w-48 -translate-x-1/2 rounded-lg border border-gray-200 shadow-lg">
          <div className="p-2">
            {statusOptions.map((status) => (
              <label
                key={status}
                className="flex items-center gap-2 rounded-lg text-[14px] text-neutral-700/75 dark:text-neutral-300"
              >
                <input
                  type="radio"
                  name="status"
                  checked={selectedStatus === status}
                  onChange={() => handleStatusChange(status)}
                  className="rounded-full border border-gray-400 checked:border-transparent"
                />
                <span>{status}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusFilter;
