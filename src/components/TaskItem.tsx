import { ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";
import { FC } from "react";

interface IProps {
  id: String;
  title: String;
  completed: Boolean;
}

const TaskItem: FC<IProps> = ({ id, title, completed }) => {
  return (
    <>
      <ListItem>
        <ListIcon
          as={completed ? CheckCircleIcon : InfoIcon}
          color="green.500"
        />
        {title}
      </ListItem>
    </>
  );
};

export default TaskItem;
