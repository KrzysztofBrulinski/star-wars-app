import { Wrapper } from "./SearchBar.style";
import { Input } from "src/components/atoms/Input/Input";

const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
  return (
    <Wrapper>
      <Input
        name="search-bar"
        id="search-bar"
        type="text"
        placeholder={"Find a character"}
        value={searchPhrase}
        onChange={(e) => {
          setSearchPhrase(e.target.value);
        }}
      ></Input>
    </Wrapper>
  );
};

export default SearchBar;
