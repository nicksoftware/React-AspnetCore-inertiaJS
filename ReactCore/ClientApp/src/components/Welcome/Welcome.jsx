import { Title, Text, Anchor } from "@mantine/core";
import classes from "./Welcome.module.css";
import { usePage } from "@inertiajs/react";

export function Welcome() {
  const props = usePage().props;

  const { title, description } = props;

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to <br />
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          {title}
        </Text>
      </Title>
      <Text
        ta="center"
        size="lg"
        maw={580}
        mx="auto"
        mt="xl"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </>
  );
}
