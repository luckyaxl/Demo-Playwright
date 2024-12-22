import { Button } from "@/components/ui/button";
import { PinInput } from "@/components/ui/pin-input";
import { toaster } from "@/components/ui/toaster";
import { Box, Center, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
    toaster.create({
      title: "Success 🚀",
      description: "You have successfully verified your account",
    });
  };

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
    >
      <Box
        p={4}
        borderRadius="lg"
        shadow="2xl"
        w={400}
        border="1px solid rgba(255, 255, 255, 0.063)"
      >
        <Center mb={4}>
          <Text
            fontWeight="bold"
            fontSize={"2xl"}
          >
            Demo Playwright
          </Text>
        </Center>
        <Center
          display={"flex"}
          flexDirection={"column"}
        >
          <Text fontWeight={"bold"}>Enter Verification Code</Text>
          <Text
            fontSize={"sm"}
            color="gray.500"
          >
            We have sent a verification code to your email
          </Text>
        </Center>
        <VStack
          spaceY={3}
          w="full"
          my={3}
        >
          <PinInput />

          <Button
            w="200px"
            onClick={handleClick}
          >
            Verify
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Home;
