import { useParams } from "react-router-dom";

const Details = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>
      <p>Detail is showing</p>
    </div>
  );
};

export default Details;
