import { Link, Form, redirect, useLoaderData } from "react-router-dom";
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

export async function loader({ params }) {
  const response = await fetch(`http://localhost:3000/api/book/${params.id}`);
  const json = await response.json();

  return {
    book: json,
  };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  console.log(payload);
  await fetch(`http://localhost:3000/api/book/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return redirect("/book");
}

export default function PageBookEdit() {
  const data = useLoaderData();

  return (
    <>
      <Flex direction="row" align="center" justify="space-between" mb="md">
        <Title order={3} color="blue.5">
          Edit Shoe
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
        method="put"
        action={`/book/${data.book.id}/edit`}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextInput
          withAsterisk
          size="md"
          label="Name"
          placeholder="Input book name"
          name="name"
          defaultValue={data.book.name}
        />

        <TextInput
          withAsterisk
          size="md"
          label="Brand"
          placeholder="Input book category"
          name="merk"
          defaultValue={data.book.merk}
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Quantity"
          placeholder="Input book qty"
          name="qty"
          defaultValue={data.book.qty}
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Price"
          placeholder="Input book price"
          name="price"
          defaultValue={data.book.price}
        />

        <Textarea
          withAsterisk
          size="md"
          placeholder="Input book desc"
          label="Description"
          name="desc"
          defaultValue={data.book.desc}
        />

        <Radio.Group
          label="Book Availability"
          withAsterisk
          size="md"
          name="available"
          defaultValue={String(data.book.available)}
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
