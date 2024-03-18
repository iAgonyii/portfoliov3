import {Button, Card, Container, Group, SimpleGrid, Space, Stack, Text, Title, Image} from "@mantine/core";
import {NextPageWithLayout} from "./_app";
import {Layout} from "../components/layout/Layout";
import {IconBrandGithub, IconBrandTelegram, IconBrandTwitter, IconBrandX, IconMail} from "@tabler/icons-react";
import Link from "next/link";
import {useSpring, animated} from '@react-spring/web'


const IndexPage: NextPageWithLayout = () => {

    const springsAbout = useSpring({
        from: {y: -50, opacity: 0},
        to: {y: 0, opacity: 1},
        delay: 500,
    })

    const springProjects = useSpring({
        from: {x: -50, opacity: 0},
        to: {x: 0, opacity: 1},
        delay: 1000,
    })

    const springsInvestments = useSpring({
        from: {x: -50, opacity: 0},
        to: {x: 0, opacity: 1},
        delay: 1500,
    })

    const projectsData = [
        {
            name: "Momentum",
            image: "./momentum.jpg",
            link: "https://momentum.lol/"
        },
        {
            name: "Agony AIO",
            image: "./agony.jpg",
            link: "https://aio.agony.dev/"
        },
        {
            name: "Blast Disperse",
            image: "./blastdisperse.jpg",
            link: "https://blastdisperse.app/"
        },
        {
            name: "Bitconnect",
            image: "./bitconnect.jpg",
            link: "https://bitconnect.lol/"
        },
        {
            name: "Rethinkable",
            image: "./rethinkable.jpg",
            link: "https://rethinkable.xyz/"
        },
    ]

    const investmentsData = [
        {
            name: "Portal",
            image: "./portalgaming.jpg",
            link: "https://www.portalgaming.com/"
        },
        {
            name: "BlockGames",
            image: "./blockgames.jpg",
            link: "https://blockgames.com/"
        },
        {
            name: "Juice",
            image: "./juice.jpg",
            link: "https://www.juice.finance/"
        },
        {
            name: "Sharky",
            image: "./sharkyfi.jpg",
            link: "https://sharky.fi/"
        },
        {
            name: "RunesTerminal",
            image: "./runesterminal.jpg",
            link: "https://runesterminal.io/"
        },
        {
            name: "Seismic Finance",
            image: "./seismic.jpg",
            link: "https://www.seismic.finance/"
        },
        {
            name: "Nesa",
            image: "./nesa.jpg",
            link: "https://www.nesa.ai/"
        },
    ]

    return (
        <Container w={"95vw"} mt={"8vh"}>
            {/* About me */}
            <animated.div style={{...springsAbout}}>
                <Group justify={"center"} gap={"xl"}>
                    <Stack>
                        <Text fz={"xl"} fw={"bold"}>
                            0xAgony
                        </Text>
                        <Text>
                            Founder, Investor, Security & Software Engineer
                        </Text>
                    </Stack>
                    <Stack align={"center"}>
                        <Group>
                            <Link className={"contactLink"} href={"https://twitter.com/0xAgony"} target={"_blank"}>
                                <IconBrandX size={24}/>
                            </Link>

                            <Link className={"contactLink"} href={"https://t.me/Agony0x"} target={"_blank"}>
                                <IconBrandTelegram size={24}/>
                            </Link>

                            <Link className={"contactLink"} href={"mailto:mail@agony.dev"} target={"_blank"}>
                                <IconMail size={24}/>
                            </Link>

                            <Link className={"contactLink"} href={"https://github.com/iAgonyii"} target={"_blank"}>
                                <IconBrandGithub size={24}/>
                            </Link>
                        </Group>
                        <Group>
                            <Link href={"#projects"}>
                                <Button size={"xs"} variant={"outline"} color={"gray"}>PROJECTS</Button>
                            </Link>
                            <Link href={"#investments"}>
                                <Button size={"xs"} variant={"outline"} color={"gray"}>INVESTMENTS</Button>
                            </Link>
                        </Group>
                    </Stack>
                </Group>
            </animated.div>

            <Space h={"5vh"}/>

            {/* Worked on projects */}
            <animated.div style={{...springProjects}}>
                <Title order={2} mt={"xl"} id={"projects"}
                       style={{scrollMarginTop: "10vh", paddingBottom: "5px", borderBottom: "2px solid lightgrey"}}>
                    Worked on</Title>
                <SimpleGrid
                    cols={{base: 2, sm: 3, lg: 5}}
                    spacing={{base: 10, sm: 'xl'}}
                    verticalSpacing={{base: 'md', sm: 'xl'}}
                    mt={"xl"}
                >
                    {
                        projectsData.map((project, index) => {
                            return (
                                <Card
                                    key={index}
                                    shadow="sm"
                                    padding="xs"
                                    component="a"
                                    href={project.link}
                                    target="_blank"
                                >
                                    <Card.Section>
                                        <Image
                                            src={project.image}
                                            h={"100%"} alt={project.name}
                                        />
                                    </Card.Section>
                                    <Space h={"xs"}/>
                                    <Text c={"white"} ta={"center"}>{project.name}</Text>
                                </Card>
                            )
                        })
                    }
                </SimpleGrid>
            </animated.div>

            <Space h={"5vh"}/>

            {/* Investments */}
            <animated.div style={{...springsInvestments}}>
                <Title order={2} mt={"xl"} id={"investments"}
                       style={{scrollMarginTop: "10vh", paddingBottom: "5px", borderBottom: "2px solid lightgrey"}}>
                    Investments</Title>
                <SimpleGrid
                    cols={{base: 2, sm: 3, lg: 5}}
                    spacing={{base: 10, sm: 'xl'}}
                    verticalSpacing={{base: 'md', sm: 'xl'}}
                    mt={"xl"}
                >
                    {
                        investmentsData.map((investment, index) => {
                            return (
                                <Card
                                    key={index}
                                    shadow="sm"
                                    padding="xs"
                                    component="a"
                                    href={investment.link}
                                    target="_blank"
                                >
                                    <Card.Section>
                                        <Image
                                            src={investment.image}
                                            h={"100%"} alt={investment.name}
                                        />
                                    </Card.Section>
                                    <Space h={"xs"}/>
                                    <Text c={"white"} ta={"center"}>{investment.name}</Text>
                                </Card>
                            )
                        })
                    }
                </SimpleGrid>
            </animated.div>
            <Space h={"5vh"}/>
        </Container>
    );
}

IndexPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default IndexPage;
