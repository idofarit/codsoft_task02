import { Progress } from "@material-tailwind/react";

const ShowPercentage = ({ value, size, color, label }) => {
  return (
    // <Progress
    //   value={value}
    //   size={size}
    //   color={color}
    //   className="border border-gray-900/10 bg-gray-900/5 p-1"
    // />
    <Progress
      value={value}
      size={size}
      color={color}
      label={label}
      //   className="border border-gray-900/10 bg-gray-900/5 p-1"
    />
  );
};

export default ShowPercentage;
