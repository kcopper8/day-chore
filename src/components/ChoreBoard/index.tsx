import { List, Typography } from "@mui/material";
import useChores from "../../hooks/main/useChores.ts";
import ChoreCreation from "../ChoreCreation";
import ChoreItem from "./ChoreItem.tsx";

type ChoreBoardProps = {};

const ChoreBoard = ({}: ChoreBoardProps) => {
  const { chores } = useChores();

  return (
    <>
      <Typography variant="h3">chore board</Typography>
      <div>
        <ChoreCreation />
      </div>
      {chores && (
        <List>
          {chores.map((todo) => (
            <ChoreItem key={todo.id} chore={todo} />
          ))}
        </List>
      )}
    </>
  );
};

export default ChoreBoard;
