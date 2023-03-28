import React, { useState } from 'react'
import { Container, Center, Box, Heading, VStack, HStack, Text, Spacer, Divider, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import "../Style/loginStyles.css"
import SignIn from './SignIn'
import Join from './Join'
export const Login = () => {
    const [currentForm, setCurrentForm] = useState("signin")
    const handlePage = (val) => {
        setCurrentForm(val)
    }
    return (

        <Container maxW="100%" minH="100vh" bgColor="#eeeeee">
            <Center>
                <VStack w={["80%", "60%", "70%", "40%"]} mt="10" mb="10" >
                    <Box pb="10"> <Heading as="h1" fontSize="5xl">FASHIQUE</Heading></Box>
                    <Box className="box" bgColor="#ffffff">
                        <Center display="flex" justifyContent="space-around" paddingY="5%" border="0px solid black" textAlign="center">
                            <Box pl="14%" >
                                <Button variant="ghost" onClick={() => handlePage("join")} _hover={{ bg: "none" }}>  <Text  color={currentForm !== "signin" ? "black" : "grey"}>JOIN</Text></Button>
                                <Divider orientation='vertical' height="50%" color="black" />
                            </Box>
                            <Divider orientation='vertical' borderColor="black" height='50px' />

                            <Box pr="13%">
                                <Button variant="ghost" onClick={() => handlePage("signin")} _hover={{ bg: "none" }}>  <Text color={currentForm === "signin" ? "black" : "grey"}>SIGN IN</Text></Button>
                            </Box>
                        </Center>

                        <Divider orientation='horizontal' style={{ width: "80%", margin: "auto", borderWidth: ".1em" }} />
                        {
                            currentForm === "signin" ? <SignIn /> : <Join />
                        }
                    </Box>


                    <Box>

                    </Box>
                </VStack>

            </Center>
        </Container>

    )
}
