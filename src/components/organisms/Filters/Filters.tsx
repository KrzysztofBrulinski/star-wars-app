import { Wrapper, Filter, Option } from "./Filters.style";
import { Input } from "src/components/atoms/Input/Input";
import { Button } from "src/components/atoms/Button/Button";
import { ChangeEvent, Dispatch } from "react";

type Props = {
  filter: { planetName: string; isChecked: boolean }[];
  setFilter: Dispatch<{ planetName: string; isChecked: boolean }[]>;
};

const Filters = ({ filter, setFilter }: Props) => {
  return (
    <Wrapper>
      <h2>FILTERS</h2>
      <Filter>
        <h3>Planets</h3>
        {filter.map(({ planetName, isChecked }) => (
          <Option key={planetName}>
            <label htmlFor={planetName}>{planetName}</label>
            <Input
              type="checkbox"
              id={planetName}
              checked={isChecked}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const updatedFilters = [...filter];
                const appliedFilter = updatedFilters.find(
                  (planet) => planet.planetName === planetName
                );

                if (appliedFilter) {
                  appliedFilter.isChecked = e.target.checked;
                  setFilter(updatedFilters);
                }
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
