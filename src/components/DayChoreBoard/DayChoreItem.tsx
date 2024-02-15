import {
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import useDayChores from "../../hooks/main/useDayChores.ts";
import { DayChore } from "../../type.ts";

type TodoItemProps = {
  chore: DayChore;
};

const DayChoreItem = ({ chore }: TodoItemProps) => {
  const { setChoreCompleted } = useDayChores(chore.date);
  const handleToggle = () => {
    setChoreCompleted({
      completed: !chore.completed,
      id: chore.id,
    });
  };
  return (
    <ListItemButton onClick={handleToggle}>
      <ListItemIcon>
        <Checkbox checked={chore.completed} />
      </ListItemIcon>
      <ListItemText primary={chore.title} />
    </ListItemButton>
  );
};

export default DayChoreItem;
