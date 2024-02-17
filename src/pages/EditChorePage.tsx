import { useParams } from "react-router-dom";
import ChoreModification from "../components/ChoreModification";

type EditChorePageProps = {};

const EditChorePage = ({}: EditChorePageProps) => {
  const params = useParams();
  const id = params.id;
  if (!id) {
    return <>404</>;
  }
  return <ChoreModification id={id} />;
};

export default EditChorePage;
