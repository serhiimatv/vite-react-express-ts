import { Button, FormControl, Input } from "@chakra-ui/react";
import { FC, useState } from "react";

interface IProps {
  addTask: (title: String) => Promise<void>;
}

const Controller: FC<IProps> = ({ addTask }) => {
  const [task, setTask] = useState("");

  return (
    <>
      <FormControl
        width="100%"
        display="flex"
        justifyContent="space-between"
        gap="3px"
      >
        <Input
          type="text"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button
          colorScheme="blue"
          onClick={async () => {
            await addTask(task);
            setTask("");
          }}
        >
          Add task
        </Button>
      </FormControl>
    </>
  );
};

export default Controller;
