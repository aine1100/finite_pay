import apple from "../assets/images/apple.png";
import playstore from "../assets/images/playstore.png";

const selectionButtons = [
    {
      text: "Personal Account",
    },
    {
      text: "Business Account",
    },
  ];
  const appStores = [
    {
      image: apple,
      rating: "4.8 ⭐ on App Store 3.5K Reviews",
    },
    {
      image: playstore,
      rating: "4.7 ⭐ on Google Play 6.8K Reviews",
    },
  ];

  const heroText=[
    "With FinitePay, you can open a global account in USD, EUR and a variety of african currencies such as KES.",
    "Manage global expenses automate financial operation and scale your revenue with ease.FinitePay is Africa’s gateway to effortless payments."
  ]
  const heroButton=[
    {
        text:"Open a Personal account"
    },{
        text:"Login"
    }
  ]

  export {selectionButtons,appStores,heroText,heroButton}