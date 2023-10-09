import { Menu, Group, Center, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBurger,
  IconChevronDown,
  IconMenu,
  IconWorld,
} from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import { Link } from "@inertiajs/react";

const links = [
  { link: "/", label: "Home" },
  { link: "/counter", label: "Counter" },
  { link: "/weather-forecast", label: "Weather" },
  {
    link: "#1",
    label: "Learn",
    links: [
      {
        link: "https://learn.microsoft.com/en-us/aspnet/core/getting-started/?view=aspnetcore-7.0&tabs=macos",
        label: "Asp.net Core",
      },
      { link: "https://react.dev/", label: "ReactJS" },
      { link: "https://inertiajs.com/pages", label: "InertiaJS" },
    ],
  },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <Link href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <IconWorld />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <div>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              hiddenFrom="sm"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
