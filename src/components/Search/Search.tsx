import { ChangeEvent, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
import Form from "react-bootstrap/Form";

export interface SearchProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ setSearchValue }: SearchProps) => {
  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const debouncedResults = useMemo(() => {
    return debounce(handleSearchValueChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <Form className="col-9" onSubmit={e => e.preventDefault()}>
      <Form.Control
        type="text"
        placeholder="Search..."
        onChange={debouncedResults}
      />
    </Form>
  );
};

export default Search;