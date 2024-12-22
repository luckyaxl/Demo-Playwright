import { toaster } from "@/components/ui/toaster";
import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
    >
      <Box
        p={6}
        borderRadius="lg"
        shadow="2xl"
        h={250}
        w={[300, 400]} // Responsive width: adjusts for smaller screens
        border="1px solid rgba(255, 255, 255, 0.1)"
      >
        <Center mb={6}>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            textAlign="center"
          >
            Hi Kitsuné 🦊
          </Text>
        </Center>
        <Center
          display="flex"
          flexDirection="column"
          gap={4}
        >
          <Text fontWeight="bold">Welcome to Demo Playwright</Text>
          <Text
            fontSize="sm"
            color="gray.500"
            textAlign="center"
          >
            <ReactTyped
              showCursor={false}
              strings={[
                "This project is designed to showcase the power of Playwright for seamless end-to-end testing. \n,Dive in, explore, and see how it helps make your testing process faster, more reliable, and enjoyable! 🚀",
              ]}
              typeSpeed={20}
              loop={false}
            />
          </Text>
        </Center>
      </Box>
    </Flex>
  );
};

export default Home;
