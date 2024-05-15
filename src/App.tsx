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

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState(false);

  const getTasks = async () => {
    try {
      await fetch("/api/task")
        .then((res) => res.json())
        .then((res) => setTasks(res));
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const addTaskHandler = async (task: String) => {
    try {
      await fetch("/api/task", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          title: task,
        }),
      });
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      await getTasks();
    }
  };

  const removeTaskHandler = async (id: String) => {
    try {
      await fetch(`/api/task/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    } finally {
      getTasks();
    }
  };

  const toggleTaslHandler = async (id: String, completed: Boolean) => {
    try {
      await fetch("/api/task", {
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: JSON.stringify({
          _id: id,
          completed: completed,
        }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      getTasks();
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <ChakraProvider>
        <Container maxW="lg" mt="15px">
          <Controller addTask={addTaskHandler} />
          <Text mt="5px">Task list:</Text>
          <List spacing={3}>
            {error ? (
              <Text>Some error</Text>
            ) : (
              tasks.map((item) => (
                <TaskItem
                  key={item._id as Key}
                  id={item._id}
                  title={item.title}
                  completed={item.completed}
                  removeTask={removeTaskHandler}
                  toggleTask={toggleTaslHandler}
                />
              ))
            )}
          </List>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
