import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Chore } from "../../type.ts";

type ChoreEditProps = {
  onSubmit: (props: Omit<Chore, "id">) => void;
  defaultProps: Omit<Chore, "id">;
  submitButtonLabel: string;
};

const ChoreEdit = ({
  onSubmit,
  defaultProps,
  submitButtonLabel,
}: ChoreEditProps) => {
  const [todoText, setTodoText] = useState(defaultProps.title);
  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            title: todoText,
          });
        }}
      >
        <TextField
          label={"title"}
          variant="standard"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <Button type="submit">{submitButtonLabel}</Button>
      </form>
    </Box>
  );
};

export default ChoreEdit;
