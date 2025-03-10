import { Status } from "./enums";

export class SubscriptionUtility {
  getStatus(status: string) {
    // PayPal
    switch (status) {
      case "ACTIVE":
        return Status.Active;
      case "SUSPENDED":
        return Status.Suspended;
      case "CANCELLED":
        return Status.Inactive;
      case "EXPIRED":
        return Status.Inactive;
      // Stripe
      case "active":
        return Status.Active;
      case "mark_uncollectible":
        return Status.Suspended;
      case "canceled":
        return Status.Inactive;
      case "incomplete":
        return Status.Inactive;
      default:
        return Status.Inactive;
    }
  }

  getStatusColor = (status: Status) => {
    switch (status) {
      case Status.Active:
        return "green";
      case Status.Inactive:
        return "red";
      case Status.Suspended:
        return "yellow";
      default:
        return "gray";
    }
  };

  formatDateTime(isoString: any) {
    const date = new Date(isoString);

    // Extract date components
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getUTCFullYear();

    // Extract time components
    // let hours = date.getUTCHours();
    // const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    // const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    // hours = hours % 12 || 12;

    return `${day}/${month}/${year}`;
  }

  getDaySuffix(day: number) {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
}

export const subscriptionUtility = new SubscriptionUtility();
