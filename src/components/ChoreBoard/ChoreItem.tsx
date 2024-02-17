import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useChores from "../../hooks/main/useChores.ts";
import { Chore } from "../../type.ts";

type TodoItemProps = {
  chore: Chore;
};

const ChoreItem = ({ chore }: TodoItemProps) => {
  const { deleteChore } = useChores();
  const navigate = useNavigate();
  return (
    <ListItem
      onClick={() => navigate(`/chore/${chore.id}`)}
      secondaryAction={
        <IconButton onClick={() => deleteChore(chore.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText>{chore.title}</ListItemText>
    </ListItem>
  );
};

export default ChoreItem;
