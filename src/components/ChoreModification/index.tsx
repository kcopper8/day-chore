import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import useChores from "../../hooks/main/useChores.ts";
import { Chore } from "../../type.ts";

type ChoreModificationProps = {
  id: Chore["id"];
};

const ChoreModification = ({ id }: ChoreModificationProps) => {
  const { modifyChore, chores } = useChores();
  const chore = chores && chores.find((chore) => id === chore.id);
  const [todoText, setTodoText] = useState(chore?.title || "");
  if (!chore) {
    return <>loading</>;
  }

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          modifyChore({
            id,
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
        <Button type="submit">Modify</Button>
      </form>
    </Box>
  );
};

export default ChoreModification;
