import { chakra, Stack, Text } from "@chakra-ui/react";

export const Credit = () => {
  return (
    <Stack alignItems="center" mt="100px" mb={5}>
      <Text textAlign="center" fontSize="sm">
        Built with{" "}
        <chakra.span fontWeight="semibold" color="brand.400">
          Next.js
        </chakra.span>{" "}
        &{" "}
        <chakra.span fontWeight="semibold" color="brand.400">
          Chakra UI
        </chakra.span>
        {" "}by Taran Anantasagar.
      </Text>
    </Stack>
    );
};

export default Credit;
