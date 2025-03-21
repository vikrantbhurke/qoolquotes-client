import Banner300x250 from "@/global/ads/Banner300x250";
import Banner320x50 from "@/global/ads/Banner320x50";
import DesktopLeaderboard from "@/global/ads/DesktopLeaderboard";
import {
  oneDefaultBg,
  threeDefaultTx,
  twoDefaultBg,
} from "@/global/styles/renamed.variables";
import { Center, Divider, ScrollArea, Stack, Text, Title } from "@mantine/core";
import { useSelector } from "react-redux";
import { SeoComponent } from "../reusables";
import { aboutContentWidth } from "@/global/styles/global.styles";
import { RootState } from "@/global/states/store";
import { ComponentOneOrTwoRoute } from "@/global/routes";
import { Clearance } from "@/user/enums";

export const AboutPage = () => {
  const { isMobile } = useSelector((state: RootState) => state.view);

  return (
    <Stack h="100%" bg={isMobile ? oneDefaultBg : twoDefaultBg}>
      <SeoComponent
        title="About Page"
        description="Learn more about Qool Quotes."
      />

      <ScrollArea scrollbarSize={2}>
        <Center>
          <Stack
            bg={oneDefaultBg}
            p={isMobile ? "md" : "xl"}
            gap="lg"
            maw={aboutContentWidth}>
            <ComponentOneOrTwoRoute
              clearance={Clearance.LevelThree}
              compOne={<></>}
              compTwo={
                <Center>
                  {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
                </Center>
              }
            />

            <Center>
              <Title order={2}>About</Title>
            </Center>

            <Text fz="sm">
              Welcome to QoolQuotes, a creative platform designed for quote
              enthusiasts and aspiring curators of inspiration. Our app allows
              users to explore, organize, and share their favorite quotes with a
              seamless and personalized experience. Whether you’re seeking daily
              motivation, curating your thoughts, or simply connecting with
              others who share your love for profound words, our app is the
              perfect tool for you.
            </Text>

            <Center>
              <Title order={3}>What You Can Do</Title>
            </Center>

            <Title order={4}>Discover and Explore</Title>

            <Stack gap={0}>
              <Title order={5}>1. Browse Quotes by Author or Topic</Title>
              <Text fz="sm">
                Easily find quotes by your favorite authors or dive into
                specific topics that resonate with your current mood or
                interests.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Title order={5}>2. Search and Filter</Title>
              <Text fz="sm">
                Use our intuitive search and filter options to quickly locate
                quotes that speak to you.
              </Text>
            </Stack>

            <Title order={4}>Create and Personalize Playlists</Title>

            <Stack gap={0}>
              <Title order={5}>3. Build Your Playlists</Title>
              <Text fz="sm">
                Create themed playlists by adding your favorite quotes, giving
                each collection a unique name and identity.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Title order={5}>4. Clone and Customize</Title>
              <Text fz="sm">
                Found a playlist you adore? Clone it and make it your own by
                adding or removing quotes.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Title order={5}>5. Save and Organize</Title>
              <Text fz="sm">
                Save playlists for future inspiration or easy access to your
                favorite collections.
              </Text>
            </Stack>

            <Title order={4}>Connect and Share</Title>

            <Stack gap={0}>
              <Title order={5}>6. Like and Appreciate</Title>
              <Text fz="sm">
                Show your support by liking quotes and playlists, helping great
                content rise to prominence.
              </Text>
            </Stack>

            <Stack gap={0}>
              <Title order={5}>7. Share with the World</Title>
              <Text fz="sm">
                Share your curated playlists with friends, family, or a wider
                audience through social media or direct links.
              </Text>
            </Stack>

            <Title order={4}>Customize Your Experience</Title>

            <Stack gap={0}>
              <Title order={5}>8. Switch Between Light and Dark Modes</Title>
              <Text fz="sm">
                Optimize for comfort with a simple toggle between light and dark
                themes.
              </Text>
            </Stack>

            {/* <Stack gap={0}>
                  <Title order={5}>9. Change Fonts and Theme Colors</Title>
                   <Text  fz="sm">
                    Personalize your reading experience by selecting fonts and theme
                    colors that suit your style.
                  </Text>
                </Stack>

                <Title order={4}>Stay Motivated</Title>

                <Stack gap={0}>
                  <Title order={5}>10. Daily Inspiration</Title>
                  <Text  fz="sm">
                    Get a dose of inspiration with featured quotes and playlists
                    updated regularly.
                  </Text>
                </Stack> */}

            <ComponentOneOrTwoRoute
              clearance={Clearance.LevelThree}
              compOne={<></>}
              compTwo={
                <Center p="md">
                  {isMobile ? <Banner320x50 /> : <Banner300x250 />}
                </Center>
              }
            />

            <Center>
              <Title order={3}>Why Choose Our App?</Title>
            </Center>

            <Title order={4}>Seamless User Experience</Title>

            <Text fz="sm">
              Our app is designed with you in mind, offering a sleek,
              user-friendly interface that works flawlessly across devices. As a
              Progressive Web App (PWA), it provides the convenience of
              accessing your favorite features on the go, whether you're using
              your phone, tablet, or desktop.
            </Text>

            <Title order={4}>Community-Centered</Title>

            <Text fz="sm">
              Join a community of quote lovers! Share your curated playlists,
              discover hidden gems from others, and connect through shared
              inspiration.
            </Text>

            <Title order={4}>Built for Flexibility</Title>

            <Text fz="sm">
              Whether you’re creating a personal archive of favorite quotes or
              sharing playlists to inspire others, our app gives you the tools
              to express yourself and spread positivity.
            </Text>

            <Divider my="xs" />

            <Center>
              <Text fs="italic" c={threeDefaultTx} fz="xs">
                Emoji artwork provided by OpenMoji – the open-source emoji
                project. License: CC BY-SA 4.0
              </Text>
            </Center>

            {/* <Center>
              <Title order={3}>Get Started</Title>
            </Center>

            <Text  fz="sm">
              Experience the joy of collecting, organizing, and sharing
              inspiration. Begin your journey today by exploring our extensive
              quote library, creating your first playlist, or customizing the look
              and feel of your app. We’re thrilled to have you as part of our
              community and can’t wait to see how you make it uniquely yours!
            </Text> */}
          </Stack>
        </Center>
      </ScrollArea>
    </Stack>
  );
};
