export const COMPANY_NAME = "Company Name";

export type LinkBlockType = {
  label: string;
  url: string;
  auth: boolean;
  icon?: string | React.JSX.Element;
  children?: LinkBlockType[];
};

export const leftLinksTop = [
  { label: "Home", url: "/", icon: "home", auth: false },
  { label: "Tasks", url: "/tasks", icon: "checkmark", auth: true },
];

export const leftLinksSub: LinkBlockType[] = [
  {
    label: "Accounts",
    url: "/accounts",
    icon: "bank",
    auth: true,
    children: [
      { label: "Checking", url: "/accounts/checking", auth: true },
      { label: "Joint Checking", url: "/accounts/joint-checking", auth: true },
      { label: "Savings", url: "/accounts/savings", auth: true },
    ],
  },
  {
    label: "Transactions",
    url: "/transactions",
    icon: "checkmark",
    auth: true,
  },
  {
    label: "Cards",
    url: "/cards",
    icon: "credit-card",
    auth: true,
    children: [
      { label: "Credit", url: "/cards/credit", auth: true },
      { label: "Debit", url: "/cards/debit", auth: true },
    ],
  },
  {
    label: "Payments",
    url: "/payments",
    icon: "airplane",
    auth: true,
    children: [
      { label: "Bill Pay", url: "/payments/bill-pay", auth: true },
      { label: "Recipients", url: "/payments/recipients", auth: true },
      { label: "Taxes", url: "/payments/taxes", auth: true },
      { label: "Wire Withdraws", url: "/payments/wire-withdraws", auth: true },
      {
        label: "ACH Authorizations",
        url: "/payments/ach-authorizations",
        auth: true,
      },
    ],
  },
];

export const leftLinks = [leftLinksTop, leftLinksSub];
