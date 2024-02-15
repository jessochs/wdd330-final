import { getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import MakeupDetails from "./MakeupDetails.mjs";

const dataSource = new ExternalServices("maybelline");
const productBrand = getParam("makeup");

const product = new MakeupDetails(productBrand, dataSource);
product.init();