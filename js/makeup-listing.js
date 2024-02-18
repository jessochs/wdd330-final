import { getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import MakeupList from "./MakeupList.mjs";

const category = getParam("category") || 'all';
const dataSource = new ExternalServices();
const element = document.querySelector(".api-list");
const listing = new MakeupList(category, dataSource, element)

listing.init();
