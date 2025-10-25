import { Models } from "node-appwrite";

const Card = ({ file }: { file: Models.User }) => {
  return <div>{file.name}</div>;
};

export default Card;
