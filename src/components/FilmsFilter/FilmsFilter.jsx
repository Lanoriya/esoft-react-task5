import { useState } from "react";

export function FilmsFilter() {
  const [selectedOption, setSelectedOption] = useState("По порядку");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="films-filter">
      <div className="relative" data-twe-dropdown-ref>
        <button
          className="flex items-center rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          type="button"
          id="dropdownMenuButton10"
          data-twe-dropdown-toggle-ref
          aria-expanded="false"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          {selectedOption}
          <span className="ms-2 w-2 [&amp;>svg]:h-5 [&amp;>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
        <ul
          className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-black bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
          aria-labelledby="dropdownMenuButton10"
          data-twe-dropdown-menu-ref
        >
          <li>
            <button
              className="block w-full whitespace-nowrap bg-black px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
              onClick={() => handleOptionClick("По типу")}
              data-twe-dropdown-item-ref
            >
              По типу
            </button>
          </li>
          <li>
            <button
              className="block w-full whitespace-nowrap bg-black px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
              onClick={() => handleOptionClick("По рейтингу (от больших к меньшим)")}
              data-twe-dropdown-item-ref
            >
              По рейтингу (от больших к меньшим)
            </button>
          </li>
          <li>
            <button
              className="block w-full whitespace-nowrap bg-black px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
              onClick={() => handleOptionClick("По рейтингу (от меньшим к большим)")}
              data-twe-dropdown-item-ref
            >
              По рейтингу (от меньшим к большим)
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
