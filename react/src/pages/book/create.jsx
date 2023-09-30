import { Link, Form, redirect } from "react-router-dom";
import {
  Button,
  Flex,
  Group,
  NumberInput,
  Radio,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";

export async function action({ request }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  await fetch("http://localhost:3000/api/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return redirect("/book");
}

export default function PageShoeCreate() {
  return (
    <>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Create Book
        </Title>

        <Button
          component={Link}
          to="/book"
          variant="outline"
          leftIcon={<IconArrowBack />}
        >
          Back
        </Button>
      </Flex>

      <Form
        method="post"
        action="/book/create"
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextInput
          withAsterisk
          size="md"
          label="Name"
          placeholder="Input book name"
          name="name"
        />

        <TextInput
          withAsterisk
          size="md"
          label="Merk"
          placeholder="Input book Category"
          name="merk"
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Quantity"
          placeholder="Input book qty"
          name="qty"
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Price"
          placeholder="Input book price"
          name="price"
        />

        <Textarea
          withAsterisk
          size="md"
          placeholder="Input book desc"
          label="Description"
          name="desc"
        />

        <Radio.Group
          label="Book Availability"
          withAsterisk
          size="md"
          name="available"
        >
          <Group mt="xs">
            <Radio value="true" label="Yes" />
            <Radio value="false" label="No" />
          </Group>
        </Radio.Group>

        <Group position="left" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Form>
    </>
  );
}
