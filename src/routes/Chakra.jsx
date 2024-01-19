import React, { useRef } from "react";
import Layout from "../components/Layout";
import {
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Spinner,
  useDisclosure,
  Input,
  SkeletonCircle,
  SkeletonText,
  Box,
  Skeleton,
  useColorMode,
} from "@chakra-ui/react";

export default function Chakra() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Layout>
      <div className="w-full flex justify-center py-16">
        <div className="w-[1200px] flex flex-col space-y-4">
          <h1>chakra</h1>
          <Button colorScheme="teal" size="xs">
            버튼
          </Button>
          <Button colorScheme="red" size="md" color="blue">
            버튼
          </Button>
          <Checkbox colorScheme="green">체크박스</Checkbox>
          <Spinner color="red.900" />
          {/* Drawer */}
          <div>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              Open
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          {/* Skeleton */}
          <div>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
            <Skeleton mt="5" height="20px" width="500px">
              어이
            </Skeleton>
          </div>
          {/* Dark Mod */}
          <Button onClick={toggleColorMode}>
            toggle{colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
