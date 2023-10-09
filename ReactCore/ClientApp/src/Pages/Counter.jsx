import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button, Card, Flex, Text, Title } from "@mantine/core";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return (
    <Flex direction="column" align="center" gap="md" justify="center">
      <Title>Counter</Title>

      <Text>This is a simple example of a React component.</Text>

      <Flex gap="xs">
        <Button size="xl" onClick={decrement}>
          Decrement
        </Button>
        <Card>
          <Text aria-live="polite">
            <strong>{counter}</strong>
          </Text>
        </Card>
        <Button size="xl" onClick={increment}>
          Increment
        </Button>
      </Flex>
    </Flex>
  );
}

Counter.layout = (page) => <Layout title="Counter" children={page} />;
