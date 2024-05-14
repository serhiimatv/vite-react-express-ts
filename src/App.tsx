// import { useEffect, useState } from "react";
import { ChakraProvider, Container, List, Text } from "@chakra-ui/react";
import Controller from "./components/Controller";
import { Key, useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";

interface Task {
  _id: String;
  title: String;
  completed: Boolean;
}

const getTasks = async () => {
  const tasks = await fetch("/api/task");

  return tasks.json();
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res));
  }, []);

  return (
    <>
      <ChakraProvider>
        <Container maxW="lg" mt="15px">
          <Controller />
          <Text mt="5px">Task list:</Text>
          <List spacing={3}>
            {tasks.map((item) => (
              <TaskItem
                key={item._id as Key}
                id={item._id}
                title={item.title}
                completed={item.completed}
              />
            ))}
          </List>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
