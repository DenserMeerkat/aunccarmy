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
      <SelectTrigger className="bg-muted xs:w-[120px]">
        <SelectValue placeholder="Select a batch" />
      </SelectTrigger>
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
