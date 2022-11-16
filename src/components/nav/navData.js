import account from "../../assets/icon/account.svg";
import dashboard from "../../assets/icon/dashboard.svg";
import productExplorer from "../../assets/icon/product explorer.svg";
import shopExplorer from "../../assets/icon/shop explorer.svg";
import shop from "../../assets/icon/shop.svg";

const navData = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: dashboard,
  },
  {
    id: 2,
    title: "Shop Explorer",
    link: "/shop_explorer",
    icon: shopExplorer,
  },
  {
    id: 3,
    title: "Product Explorer",
    link: "/product_explorer",
    icon: productExplorer,
  },
  {
    id: 4,
    title: "My Shop",
    link: "/shop",
    icon: shop,
  },
  {
    id: 5,
    title: "Account",
    link: "/account",
    icon: account,
  },

];

export default navData;
