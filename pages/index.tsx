import { Button, Card, Container, Group, SimpleGrid, Space, Stack, Text, Title, Image, List } from "@mantine/core";
import { NextPageWithLayout } from "./_app";
import { Layout } from "../components/layout/Layout";
import { IconBrandGithub, IconBrandTelegram, IconBrandTwitter, IconBrandX, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { useSpring, animated } from '@react-spring/web'
import { Carousel } from "@mantine/carousel";
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from "react";

const IndexPage: NextPageWithLayout = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }))
    const autoplay2 = useRef(Autoplay({ delay: 3000 }))
    const autoplay3 = useRef(Autoplay({ delay: 4000 }))

    const springsAbout = useSpring({
        from: { y: -50, opacity: 0 },
        to: { y: 0, opacity: 1 },
        delay: 500,
    })

    const springProjects = useSpring({
        from: { x: -50, opacity: 0 },
        to: { x: 0, opacity: 1 },
        delay: 1000,
    })

    const springsInvestments = useSpring({
        from: { x: -50, opacity: 0 },
        to: { x: 0, opacity: 1 },
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
            <animated.div style={{ ...springsAbout }}>
                <Group justify={"center"} gap={"xl"}>
                    <Stack>
                        <Text fz={"xl"} fw={"bold"}>
                            Agony
                        </Text>
                        <Text>
                            Founder, Investor, Security & Software Engineer
                        </Text>
                    </Stack>
                    <Stack align={"center"}>
                        <Group>
                            <Link className={"contactLink"} href={"https://twitter.com/0xAgony"} target={"_blank"}>
                                <IconBrandX size={24} />
                            </Link>

                            <Link className={"contactLink"} href={"https://t.me/Agony0x"} target={"_blank"}>
                                <IconBrandTelegram size={24} />
                            </Link>

                            <Link className={"contactLink"} href={"mailto:mail@agony.dev"} target={"_blank"}>
                                <IconMail size={24} />
                            </Link>

                            <Link className={"contactLink"} href={"https://github.com/iAgonyii"} target={"_blank"}>
                                <IconBrandGithub size={24} />
                            </Link>
                        </Group>
                        <Group>
                            <Link href={"#writing"}>
                                <Button size={"xs"} variant={"outline"} color={"gray"}>WRITING</Button>
                            </Link>
                            <Link href={"#projects"}>
                                <Button size={"xs"} variant={"outline"} color={"gray"}>PROJECTS</Button>
                            </Link>
                        </Group>
                    </Stack>
                </Group>
            </animated.div>

            <Space h={"5vh"} />

            {/* Writing section */}
            <animated.div style={{ ...springProjects }}>
                <Title order={2} mt={"xl"} id={"writing"}
                    style={{ scrollMarginTop: "10vh", paddingBottom: "5px", borderBottom: "2px solid lightgrey" }}>
                    Writing</Title>
                <List mt={"md"}>
                    <List.Item>
                        <Link href={"#"}>[10-FEB-2025] TBA</Link>
                    </List.Item>
                </List>
            </animated.div>

            <Space h={"5vh"} />

            {/* Live projects */}
            <animated.div style={{ ...springsInvestments }}>
                <Title order={2} mt={"xl"} id={"projects"}
                    style={{ scrollMarginTop: "10vh", paddingBottom: "5px", borderBottom: "2px solid lightgrey" }}>
                    Live projects</Title>
                <Space h={"lg"} />
                <Stack mt={"md"} gap={"xl"}>
                    <Stack>
                        <Text c={"gray"} fw={"bold"} style={{ lineHeight: "0.8" }}>Agony AIO - Desktop native high-performance EVM onchain trading tools</Text>
                        <Link style={{ lineHeight: "0.8" }} href={"https://aio.agony.dev/"} target={"_blank"}>https://aio.agony.dev</Link>
                        <Carousel withIndicators loop plugins={[autoplay.current]}>
                            <Carousel.Slide>
                                <Image src={"/aio1.png"} alt={"Agony AIO 1"} />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Image src={"/aio2.png"} alt={"Agony AIO 2"} />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Image src={"/aio3.png"} alt={"Agony AIO 3"} />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Image src={"/aio4.png"} alt={"Agony AIO 4"} />
                            </Carousel.Slide>
                        </Carousel>
                    </Stack>
                    <Stack>
                        <Text c={"gray"} fw={"bold"} style={{ lineHeight: "0.8" }}>Unnamed Project - Experimental webapp terminal for advanced EVM trading tools</Text>
                        <Link style={{ lineHeight: "0.8" }} href={"https://mossad.agony.dev"} target={"_blank"}>https://mossad.agony.dev</Link>
                        <Carousel withIndicators loop plugins={[autoplay2.current]}>
                            <Carousel.Slide>
                                <Image src={"/mossad1.png"} alt={"Mossad1"} />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Image src={"/mossad2.png"} alt={"Mossad2"} />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Image src={"/mossad3.png"} alt={"Mossad3"} />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Image src={"/mossad4.png"} alt={"Mossad4"} />
                            </Carousel.Slide>
                        </Carousel>
                    </Stack>
                    <Stack>
                        <Text c={"gray"} fw={"bold"} style={{ lineHeight: "0.8" }}>Blast Disperse - Send ETH, tokens, and NFTs to multiple addresses at once on Blast L2.</Text>
                        <Link style={{ lineHeight: "0.8" }} href={"https://blastdisperse.app/"} target={"_blank"}>https://blastdisperse.app/</Link>
                        <Carousel withIndicators loop plugins={[autoplay3.current]}>
                            <Carousel.Slide>
                                <Image src={"/disperse1.png"} alt={"Disperse1"} />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Image src={"/disperse2.png"} alt={"Disperse2"} />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Image src={"/disperse3.png"} alt={"Disperse3"} />
                            </Carousel.Slide>
                        </Carousel>
                    </Stack>
                </Stack>
            </animated.div>
            <Space h={"5vh"} />
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
