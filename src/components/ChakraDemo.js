import React from "react";
import { Input, Stack,Button,useToast  } from "@chakra-ui/react";
const  ChakraDemo = () => {
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
    return (
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <Input placeholder="extra small size" size="xs" />
                <Input placeholder="small size" size="sm" />
                <Input placeholder="medium size" size="md" />
                <Input placeholder="large size" size="lg" />
              </Stack>
              <Button
                className="mt-4"
                type="submit"
                colorScheme="blue"
                onClick={() =>
                toast({
                  title: "Account created.",
                  description: "We've created your account for you.",
                  status: "success",
                  duration: 1000,
                  isClosable: true,
                })
              }>Button</Button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default ChakraDemo;
