import Select from "react-select";

// adds only 1 of each category to the dropdown - removes duplicates
function SelectCategories({ availableCategories, setSelectedCategories }) {
  const foodCategories = [
    ...availableCategories.filter((value, index) => {
      const val = JSON.stringify(value);
      return (
        index ===
        availableCategories.findIndex((obj) => JSON.stringify(obj) === val)
      );
    }),
  ];

  return (
    <Select
      className="category-select"
      placeholder="Categories"
      options={foodCategories}
      isMulti
      onChange={(opt) => setSelectedCategories(opt)}
      styles={{
        option: (provided) => ({
          ...provided,
          textTransform: "capitalize",
        }),
        multiValue: (provided) => ({
          ...provided,
          textTransform: "capitalize",
        }),
      }}
    />
  );
}

export default SelectCategories;
