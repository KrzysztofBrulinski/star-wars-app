import { Wrapper, Filter, Option } from "./Filters.style";
import { Input } from "src/components/atoms/Input/Input";
import { Button } from "src/components/atoms/Button/Button";

const Filters = ({ filter, setFilter }) => {
  return (
    <Wrapper>
      <h3>FILTERS</h3>
      <Filter>
        {filter.map(({ planetName, isChecked }) => (
          <Option key={planetName}>
            <label htmlFor={planetName}>{planetName}</label>
            <Input
              type="checkbox"
              id={planetName}
              checked={isChecked}
              onChange={(e) => {
                const filterCopy = [...filter];
                filterCopy.find(
                  (planet) => planet.planetName === planetName
                ).isChecked = e.target.checked;
                setFilter(filterCopy);
              }}
            />
          </Option>
        ))}
      </Filter>
      <Button
        onClick={() => {
          setFilter(filter.map((planet) => ({ ...planet, isChecked: false })));
        }}
      >
        clear filters
      </Button>
    </Wrapper>
  );
};

export default Filters;
