import { Button } from "@/components/ui/button";
import { PinInput } from "@/components/ui/pin-input";
import { toaster } from "@/components/ui/toaster";
import {
  Box,
  Center,
  Flex,
  Input,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Home = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      router.push("/");
      toaster.create({
        title: "Success 🚀",
        description: "You have successfully verified your account",
      });
    }, 3000);
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
        <Center>
          <Text
            fontWeight="bold"
            fontSize={"2xl"}
          >
            Demo Playwright
          </Text>
        </Center>
        <Separator my={5} />
        <Center
          mb={5}
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          <VStack
            spaceY={5}
            w="full"
            my={3}
          >
            <PinInput />

            <Button
              loading={isLoading}
              w="200px"
              type="submit"
            >
              Verify
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Home;
