import { useRef, FormEvent } from 'react';
import { searchValueProps } from '@/app/models/game';

const SearchComponent: React.FC<searchValueProps> = ({ searchValue, setSearchValue }) => {
  const exampleInput = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (exampleInput.current) {
      setSearchValue(exampleInput.current.value);
    }
  };

  const handleReset = () => {
    if (exampleInput.current) {
      exampleInput.current.value = '';
      setSearchValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="search-input" className="relative">
      <div className="flex items-center mb-5">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 p-2.5 text-sm rounded-md pl-3 pr-10 w-full"
            ref={exampleInput}
          />
          {searchValue && <button
            type="button"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
            onClick={handleReset}
            aria-label="Reset"
          >
            ×
          </button>}
        </div>
        <input
          className="py-2.5 px-5 border border-gray-300 bg-blue-500 text-white rounded-md text-sm cursor-pointer ml-2 outline-none"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
};

export default SearchComponent;
