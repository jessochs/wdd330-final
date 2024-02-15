import { getLocalStorage } from "./utils.mjs";
import viewSaved from "./viewSaved.mjs";

const save = new viewSaved("jo-save", ".product-list");
save.init();