import { useState } from "react";


const useInput = (initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue(""),

    bind: {
      value,
      onChange: (
        event: React.ChangeEvent<HTMLInputElement>,
        altValue?: string
      ) => {
        if (altValue) {
          setValue(altValue);
          return;
        }
        if (event.target.type === "checkbox") {
          setValue(event.target.checked ? "true" : "false");
          return;
        }
        setValue(event.target.value);
      },
    },
  };
};

export default useInput;