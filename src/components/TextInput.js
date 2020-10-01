import React from "react";
import TextField from "@material-ui/core/TextField";
import VMasker from "vanilla-masker";


const TextInput = ({ pure, onChange, title, value, mask, onSubmitEditing, ...others }) => {
  if (pure) {
    return (
      <input
        onChange={(event, value) => {
          if (mask && onChange)
            return onChange(
              VMasker.toPattern(event.target.value, mask)
            );
          if (onChange) onChange(event.target.value);
        }}
        value={value || ""} {...others} />
    )
  } else
    return (
      <TextField
        label={title}
        variant={"standard"}
        margin="normal"
        fullWidth
        value={value || ""}
        onChange={(event, value) => {
          if (mask && onChange)
            return onChange(
              VMasker.toPattern(event.target.value, mask)
            );
          if (onChange) onChange(event.target.value);
        }}
        onKeyDown={event => {
          if (onSubmitEditing && event.key === "Enter") {
            onSubmitEditing();
          }
        }}
        {...others}
      />
    );
};

export default TextInput;