import { FormControl, Input } from "@chakra-ui/react";
import { FC, useState } from "react";

const Controller: FC = () => {
  const [task, setTask] = useState("");

  return (
    <>
      <FormControl width="400px">
        <Input
          type="text"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </FormControl>
    </>
  );
};

export default Controller;
