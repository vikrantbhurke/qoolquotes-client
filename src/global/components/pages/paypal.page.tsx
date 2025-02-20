import { useState } from "react";
import axios from "axios";
import { Button } from "@mantine/core";
import { oneDefaultBg } from "@/global/styles/renamed.variables";

// const API_URL = import.meta.env.VITE_SERVER_URL; // Your Express backend URL

// Your PayPal plan ID
export default function PayPalSubscription() {
  const [_subscriptionId, setSubscriptionId] = useState<string | null>(null);
  const [subscriptionDetails, setSubscriptionDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCreateSubscription = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`/paypal/create-subscription`, {});

      if (response.data.approve_url) {
        window.location.href = response.data.approve_url;
      }
    } catch (error) {
      console.error("Subscription error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getSubscriptionDetails = async () => {
    // if (!subscriptionId) return alert("Enter a Subscription ID");

    try {
      setLoading(true);
      const response = await axios.get(`/paypal/get-subscription`);
      setSubscriptionDetails(response.data);
    } catch (error) {
      console.error("Get subscription error:", error);
    } finally {
      setLoading(false);
    }
  };

  const suspendSubscription = async () => {
    // if (!subscriptionId) return alert("Enter a Subscription ID");

    try {
      setLoading(true);
      await axios.post(`/paypal/suspend-subscription`, {});
      console.log("Subscription suspended successfully!");
      setSubscriptionDetails(null);
      setSubscriptionId(null);
    } catch (error) {
      console.error("Suspend subscription error:", error);
    } finally {
      setLoading(false);
    }
  };

  const activateSubscription = async () => {
    // if (!subscriptionId) return alert("Enter a Subscription ID");

    try {
      setLoading(true);
      await axios.post(`/paypal/activate-subscription`, {});
      console.log("Subscription activated successfully!");
      setSubscriptionDetails(null);
      setSubscriptionId(null);
    } catch (error) {
      console.error("Activate subscription error:", error);
    } finally {
      setLoading(false);
    }
  };

  const cancelSubscription = async () => {
    // if (!subscriptionId) return alert("Enter a Subscription ID");

    try {
      setLoading(true);
      await axios.post(`/paypal/cancel-subscription`, {});
      console.log("Subscription canceled successfully!");
      setSubscriptionDetails(null);
      setSubscriptionId(null);
    } catch (error) {
      console.error("Cancel subscription error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        textAlign: "center",
        padding: 20,
      }}>
      <h2>PayPal Subscription</h2>

      {subscriptionDetails && (
        <div style={{ marginTop: 20, textAlign: "left" }}>
          <h4>Subscription Details:</h4>
          <pre style={{ background: "#f4f4f4", padding: 10 }}>
            {JSON.stringify(subscriptionDetails, null, 2)}
          </pre>
        </div>
      )}

      <Button
        onClick={handleCreateSubscription}
        disabled={loading}
        bg="#F2BA36"
        c="black"
        radius={6}
        fullWidth>
        {loading ? "Processing..." : "Subscribe with PayPal"}
      </Button>

      <Button
        onClick={getSubscriptionDetails}
        disabled={loading}
        bg={oneDefaultBg}
        c="black"
        radius={6}
        fullWidth>
        Get Subscription Details
      </Button>

      <Button
        onClick={suspendSubscription}
        disabled={loading}
        bg={oneDefaultBg}
        c="black"
        radius={6}
        fullWidth>
        Suspend Subscription
      </Button>

      <Button
        onClick={activateSubscription}
        disabled={loading}
        bg={oneDefaultBg}
        c="black"
        radius={6}
        fullWidth>
        Activate Subscription
      </Button>

      <Button
        onClick={cancelSubscription}
        disabled={loading}
        bg={oneDefaultBg}
        c="black"
        radius={6}
        fullWidth>
        Cancel Subscription
      </Button>
    </div>
  );
}
