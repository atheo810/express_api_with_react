import {
  Link,
  Form,
  redirect,
  useNavigation,
  useActionData,
  useLoaderData,
} from "react-router-dom";
import {
  Button,
  Flex,
  Group,
  Select,
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

  const errors = {};

  if (Number(formData.get("qty")) < 1) {
    errors.qty = "Qty should be more than zero";
  }

  if (Number(formData.get("price")) < 0) {
    errors.price = "Price should be start from zero";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  await fetch("http://localhost:3000/api/book", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return redirect("/book");
}

export async function loader() {
  const response = await fetch("http://localhost:3000/api/category");
  const payload = await response.json();

  const categories = payload.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  return { categories };
}

export default function PageShoeCreate() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const data = useLoaderData();

  const errors = useActionData();

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
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <TextInput
          withAsterisk
          size="md"
          label="Name"
          placeholder="Input book name"
          name="name"
          required
        />

        <TextInput
          withAsterisk
          size="md"
          label="Merk"
          placeholder="Input book Category"
          name="merk"
          required
        />

        <Select
          label="Category"
          placeholder="Please choose one"
          withAsterisk
          size="md"
          name="categoryId"
          required
          data={data.categories}
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Quantity"
          placeholder="Input book qty"
          name="qty"
          error={errors?.qty}
        />

        <NumberInput
          withAsterisk
          size="md"
          label="Price"
          placeholder="Input book price"
          name="price"
          error={errors?.price}
        />

        <Textarea
          withAsterisk
          size="md"
          placeholder="Input book desc"
          label="Description"
          name="desc"
          required
        />

        <Radio.Group
          label="Book Availability"
          withAsterisk
          size="md"
          name="available"
          required
        >
          <Group mt="xs">
            <Radio value="true" label="Yes" />
            <Radio value="false" label="No" />
          </Group>
        </Radio.Group>

        <Group position="left" mt="md">
          <Button type="submit" loading={isSubmitting}>
            Submit
          </Button>
        </Group>
      </Form>
    </>
  );
}
