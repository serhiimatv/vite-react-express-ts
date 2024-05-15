import { ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon, InfoIcon, DeleteIcon } from "@chakra-ui/icons";
import { FC } from "react";

interface IProps {
  id: String;
  title: String;
  completed: Boolean;
  removeTask: (id: String) => Promise<void>;
  toggleTask: (id: String, completed: Boolean) => Promise<void>;
}

const TaskItem: FC<IProps> = ({
  id,
  title,
  completed,
  removeTask,
  toggleTask,
}) => {
  return (
    <>
      <ListItem display="flex" alignItems="center">
        <ListIcon
          as={completed ? CheckCircleIcon : InfoIcon}
          color="green.500"
          cursor="pointer"
          onClick={() => toggleTask(id, completed)}
        />
        {title}
        <ListIcon
          as={DeleteIcon}
          ml="auto"
          display="block"
          color="red.600"
          cursor="pointer"
          onClick={() => removeTask(id)}
        />
      </ListItem>
    </>
  );
};

export default TaskItem;
