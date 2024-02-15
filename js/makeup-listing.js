import { getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import MakeupList from "./MakeupList.mjs";

const brand = getParam("brand");
const dataSource = new ExternalServices();
const element = document.querySelector(".makeup-list");
const listing = new MakeupList(category, dataSource, element)

listing.init();
