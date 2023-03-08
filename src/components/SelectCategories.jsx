import Select from "react-select";

const SelectCategories = ({ availableCategories, setSelectedCategories }) => {
    console.log(availableCategories)
    const foodCategories =
        // [{label: 'indian', value: 'indian'}]
        [...availableCategories.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === availableCategories.findIndex(obj => {
            return JSON.stringify(obj) === _value;
        })  // adds only 1 of each category to the dropdown - removes duplicates
    })]

    return (
        <>
            <Select
                options={foodCategories}
                isMulti
                onChange={(opt) => setSelectedCategories(opt)}
                styles={{
                    option: (provided) => ({
                        ...provided,
                        textTransform: 'capitalize',
                    }),
                    multiValue: (provided) => ({
                        ...provided,
                        textTransform: 'capitalize',
                    }),
                }}
            />
        </>
    )
}

export default SelectCategories;