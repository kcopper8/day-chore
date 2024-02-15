import useChoreDates from "../hooks/main/useChoreDates.ts";

type ArchivePageProps = {};

const ArchivePage = ({}: ArchivePageProps) => {
  const { choreDateList } = useChoreDates();
  if (!choreDateList || choreDateList.length <= 0) {
    return <p>no data</p>;
  }
  return (
    <ul>
      {choreDateList.map((choreDate) => (
        <li key={choreDate}>{choreDate}</li>
      ))}
    </ul>
  );
};

export default ArchivePage;
