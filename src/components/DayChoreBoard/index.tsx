import { List, Typography } from "@mui/material";
import useDayChores from "../../hooks/main/useDayChores.ts";
import { ChoreDate } from "../../type.ts";
import DayChoreItem from "./DayChoreItem.tsx";

type DayChoreBoardProps = {
  date: ChoreDate;
};

const DayChoreBoard = ({ date }: DayChoreBoardProps) => {
  const { dayChores: todos } = useDayChores(date);
  return (
    <>
      <Typography variant="h3">{date}</Typography>

      {todos && (
        <List>
          {todos.map((todo, index) => (
            <DayChoreItem key={index} chore={todo} />
          ))}
        </List>
      )}
    </>
  );
};

export default DayChoreBoard;
