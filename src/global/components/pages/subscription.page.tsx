import { Text, Title, Stack, Button, Center, Box } from "@mantine/core";
import { RootState } from "@/global/states/store";
import { useEffect, useState } from "react";
import { setAuth } from "@/user/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserById } from "@/user/hooks/read";
import { CustomSkeleton } from "../reusables";
import { oneDefaultBg, twoDefaultBg } from "@/global/styles/renamed.variables";
import { roundBorderStyle } from "@/global/styles/app.css";

export const SubscriptionPage = () => {
  const { auth } = useSelector((state: RootState) => state.auth);
  let [message, setMessage] = useState("");
  let [success, setSuccess] = useState(true);
  let [_subscriptionId, setSubscriptionId] = useState("none");
  const { user, isPending, isError } = useGetUserById(auth.id);
  const { isMobile } = useSelector((state: RootState) => state.view);
  console.log("User", success, user?.subscriptionId);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success") && user?.id) {
      const sId =
        user?.subscriptionId !== "none" ? user?.subscriptionId : "none";
      setSubscriptionId(sId);
      setSuccess(true);
    }

    if (query.get("canceled")) {
      setSuccess(false);
      setMessage(
        "Order cancelled - explore the app and subscribe when you're ready."
      );
    }
  }, [user?.subscriptionId, user?.id]);

  if (isPending)
    return (
      <Box component="div" bg={isMobile ? oneDefaultBg : twoDefaultBg} h="100%">
        <Stack
          h="100%"
          gap="xl"
          align="center"
          justify={isMobile ? "start" : "center"}>
          <Stack
            gap={4}
            align="center"
            bg={oneDefaultBg}
            w={isMobile ? "100%" : 400}
            p={isMobile ? "md" : "xl"}
            className={`${roundBorderStyle}`}>
            <CustomSkeleton w="100%" />
            <CustomSkeleton w="100%" />
            <CustomSkeleton w="100%" />
            <CustomSkeleton w="100%" />
            <CustomSkeleton w="100%" h={60} />
          </Stack>
        </Stack>
      </Box>
    );

  if (isError) return "An error occurred.";
  if (!user) return "No data found.";

  let component;
  if (auth.id && auth.subscriptionStatus !== "active") {
    if (!success && message === "") component = <ProductDisplay />;
    else if (success && user.subscriptionId !== "none")
      component = <SuccessDisplay user={user} />;
    else component = <Message message={message} />;
  } else {
    component = <SuccessDisplay user={user} />;
  }

  return (
    <Box component="div" bg={isMobile ? oneDefaultBg : twoDefaultBg} h="100%">
      <Stack
        h="100%"
        gap="xl"
        align="center"
        justify={isMobile ? "start" : "center"}>
        <Stack
          gap="md"
          bg={oneDefaultBg}
          w={isMobile ? "100%" : 400}
          p={isMobile ? "md" : "xl"}
          className={`${roundBorderStyle}`}>
          <Title order={5} ta="center">
            🪙 QoolQuotes Premium
          </Title>
          {component}
        </Stack>
      </Stack>
    </Box>
  );
};

const ProductDisplay = () => {
  const list = [
    `⭐ Remove all ads.`,
    `⭐ Remove playlist limits.`,
    `⭐ Create, share and save playlists.`,
    `⭐ Apply custom colors and fonts to quotes.`,
  ];

  return (
    <>
      <Stack gap="xs">
        <Title order={6} ta="start">
          Subscribe for just ${10} / year.
        </Title>

        {list.map((item, index) => (
          <Text size="sm" key={index}>
            {item}
          </Text>
        ))}
      </Stack>

      {/* <Button c={oneDefaultBg} fullWidth>
        Coming Soon
      </Button> */}

      {/* UNCOMMENT THIS WHEN BANK ACCOUNT IS LINKED TO LIVE STRIPE ACCOUNT */}

      <form
        action={`${import.meta.env.VITE_SERVER_URL}/stripe/create-checkout-session`}
        method="POST">
        <input
          type="hidden"
          name="price_id"
          value="price_1Qsgy6SFJJk3ZKMlaSAAuotv"
        />
        <Button
          id="checkout-and-portal-button"
          type="submit"
          bg="#635BFF"
          c="white"
          radius={6}
          fullWidth>
          Subscribe with Stripe
        </Button>
      </form>

      <form
        action={`${import.meta.env.VITE_SERVER_URL}/paypal/create-subscription`}
        method="POST">
        <input
          type="hidden"
          name="plan_id"
          value={import.meta.env.VITE_PAYPAL_PLAN_ID}
        />
        <Button
          id="create-paypal-subscription-button"
          type="submit"
          bg="#F2BA36"
          c="black"
          radius={6}
          fullWidth>
          Subscribe with PayPal
        </Button>
      </form>

      {/* <PayPalButtons
        style={styles}
        createSubscription={createSubscription}
        onApprove={onApprove}
        onCancel={onCancel}
        onError={onError}
      /> */}

      {/* <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&vault=true&intent=subscription">
  </script> // Add your client_id
     <div id="paypal-button-container"></div>
      <script>
       paypal.Buttons({
        createSubscription: function(data, actions) {
          return actions.subscription.create({
           'plan_id': 'YOUR_PLAN_ID' // Creates the subscription
           });
         },
         onApprove: function(data, actions) {
           alert('You have successfully subscribed to ' + data.subscriptionID); // Optional message given to subscriber
         }
       }).render('#paypal-button-container'); // Renders the PayPal button
      </script> */}
    </>
  );
};

interface ISuccessDisplayProps {
  user: any;
}

const SuccessDisplay = ({ user }: ISuccessDisplayProps) => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuth({ ...auth, subscriptionStatus: user.subscriptionStatus }));
  }, [user]);
  console.log(user);
  return (
    <>
      <Center>
        <Text fz="sm">You are subscribed to QoolQuotes Premium.</Text>
      </Center>

      <form
        action={`${import.meta.env.VITE_SERVER_URL}/stripe/create-portal-session`}
        method="POST">
        <input
          type="hidden"
          id="subscription-id"
          name="subscriptionId"
          value={user.subscriptionId}
        />
        <Button
          id="checkout-and-portal-button"
          type="submit"
          bg="blue"
          fullWidth>
          Manage Your Subscription
        </Button>
      </form>
    </>
  );
};

interface IMessageProps {
  message: string;
}

const Message = ({ message }: IMessageProps) => (
  <Center>
    <Text>{message}</Text>
  </Center>
);
