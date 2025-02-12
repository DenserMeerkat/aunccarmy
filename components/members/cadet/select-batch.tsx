import RTooltip from "@/components/common/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectBatchProps = {
  onSelect: (year: number) => void;
  selectedYear: number;
  years: number[];
};

const SelectBatch = ({ onSelect, selectedYear, years }: SelectBatchProps) => {
  return (
    <Select
      value={selectedYear.toString()}
      onValueChange={(value) => onSelect(Number(value))}
    >
      <RTooltip content="Select batch">
        <SelectTrigger className="xs:w-[120px]">
          <SelectValue />
        </SelectTrigger>
      </RTooltip>
      <SelectContent align="end">
        <SelectGroup>
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectBatch;
