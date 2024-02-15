import useChores from "../../hooks/main/useChores.ts";
import ChoreCreation from "../ChoreCreation";
import ChoreItem from "./ChoreItem.tsx";

type ChoreBoardProps = {};

const ChoreBoard = ({}: ChoreBoardProps) => {
  const { chores } = useChores();

  return (
    <>
      <h2>chore board</h2>
      <div>
        <ChoreCreation />
      </div>
      {chores && (
        <ul>
          {chores.map((todo, index) => (
            <li key={index}>
              <ChoreItem chore={todo} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ChoreBoard;
