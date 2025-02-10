import flag from "@/app/assets/images/flag.png"
import market from "@/app/assets/images/markets.png"
import manage from "@/app/assets/images/manage.png"
import track from "@/app/assets/images/track.png"
import pass from "../assets/images/pass.png"
import reg from "../assets/images/reg.png"
import fraud from "../assets/images/fraud.png"

const flags=[
flag,flag,flag,flag,flag,flag,flag,flag,flag
]
const buheroText=[
    "Take your African business Global!",
    "Accept international payments, pay suppliers or employees across the continent, and access competitive forex rates—all in one place."
  ]
const features=[
    {
        image:manage,
        title:"Manage Multiple Currencies:",
        desc:"Easily handle payments in various currencies, whether you're traveling or expanding your business across borders."
    },
    {
        image:track,
        title:"Track Your Spending and Earnings:",
        desc:"Gain insights into your finances with detailed transaction reports and analytics, giving you full control."
    },
    {
        image:market,
        title:"Access Global Markets:",
        desc:"Tap into international opportunities with low-cost cross-border payments and global account access."
    }
]
const busecurity=[
    {
        image:pass,
        title:"Encryption",
        text:"Your transactions are encrypted from start to finish, ensuring your data is always secure."
    },
    {
        image:reg,
        title:"Regulatory Compliance",
        text:"We adhere to global financial regulations, ensuring your funds are handled securely and responsibly."
    },
    {
        image:fraud,
        title:"Fraud Monitoring",
        text:"Real-time transaction monitoring to prevent unauthorized money transfer."
    }
]
const whyUs=[
    {
        image:manage,
        title:"Multi-Currency Business Account",
        desc:"Businesses can hold, manage, and transfer funds in multiple currencies effortlessly.Competitive exchange rates for easy cross-border transactions."
    },
    {
        image:track,
        title:"Global and Local Payments ",
        desc:"Seamless cross-border payments to suppliers, employees, or partners worldwide with low fees."
    },
    {
        image:market,
        title:"Payment Integration for Businesses",
        desc:"APIs and plugins to integrate FinitePay as a payment gateway on e-commerce platforms or websites. Instant notifications and reconciliation for incoming payments."
    },
    {
        image:manage,
        title:" Enhanced Security for Businesses ",
        desc:"Multi-user account access with role-based permissions for teams.Advanced fraud detection and security measures tailored for businesses."
    },
    {
        image:track,
        title:"Vendor and Supplier Payments ",
        desc:"Bulk payments to multiple recipients in one transaction.Automated and scheduled payments to avoid missed deadlines."
    },
    {
        image:market,
        title:"Customer Support for Businesses",
        desc:"Dedicated account managers for high-value accounts.24/7 priority support for quick resolutions to any issues."
    }
]
export {flags,features,busecurity,whyUs,buheroText}