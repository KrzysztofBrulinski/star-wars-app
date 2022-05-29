import { Wrapper } from "./SearchBar.style";
import { Input } from "src/components/atoms/Input/Input";
import { ChangeEvent, Dispatch } from "react";

type Props = { searchPhrase: string; setSearchPhrase: Dispatch<string> };

const SearchBar = ({ searchPhrase, setSearchPhrase }: Props) => {
  return (
    <Wrapper>
      <Input
        name="search-bar"
        id="search-bar"
        type="text"
        placeholder={"Find a character"}
        value={searchPhrase}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchPhrase(e.target.value);
        }}
      />
    </Wrapper>
  );
};

export default SearchBar;
