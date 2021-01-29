import React from "react";

interface visualMode {
  id: string;
  selected: boolean;
}

export const selectCheckbox = () => {
  const [selected, setSelected] = React.useState<visualMode>();

  const onCheckboxClicked = (event) => {
    setSelected({
      id: event.target.id,
      selected: event.target.checked,
    });
  };
  return selected
};
