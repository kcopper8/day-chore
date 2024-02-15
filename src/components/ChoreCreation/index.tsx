import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import useChores from "../../hooks/main/useChores.ts";

type ChoreCreationProps = {};

const ChoreCreation = ({}: ChoreCreationProps) => {
  const { addChore } = useChores();
  const [todoText, setTodoText] = useState("");
  const handleAdd = () => {
    addChore({
      title: todoText,
    });
    setTodoText("");
  };

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <TextField
          label={"title"}
          variant="standard"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <Button type="submit">Add</Button>
      </form>
    </Box>
  );
};

export default ChoreCreation;
