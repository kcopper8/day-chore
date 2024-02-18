import {
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { format } from "date-fns/format";
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
      <ListItemText
        primary={chore.title}
        secondary={chore.completedAt && format(chore.completedAt, "h:m aaa")}
      />
    </ListItemButton>
  );
};

export default DayChoreItem;
