import { PiBank } from "react-icons/pi";
import { LuCheck } from "react-icons/lu";
import { LuHouse } from "react-icons/lu";
import { LuArrowRightLeft } from "react-icons/lu";
import { LuCreditCard } from "react-icons/lu";
import { BiPaperPlane } from "react-icons/bi";
export const COMPANY_NAME = "Company Name";

export type LinkBlockType = {
  label: string;
  url: string;
  auth: boolean;
  icon?: string | React.JSX.Element;
  children?: LinkBlockType[];
};

export const leftLinksTop = [
  { label: "Home", url: "/", icon: <LuHouse />, auth: false },
  { label: "Tasks", url: "/tasks", icon: <LuCheck />, auth: true },
];

export const leftLinksSub: LinkBlockType[] = [
  {
    label: "Accounts",
    url: "/accounts",
    icon: <PiBank />,
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
    icon: <LuArrowRightLeft />,
    auth: true,
  },
  {
    label: "Cards",
    url: "/cards",
    icon: <LuCreditCard />,
    auth: true,
    children: [
      { label: "Credit", url: "/cards/credit", auth: true },
      { label: "Debit", url: "/cards/debit", auth: true },
    ],
  },
  {
    label: "Payments",
    url: "/payments",
    icon: <BiPaperPlane />,
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

export const globals = [leftLinksTop, leftLinksSub];
