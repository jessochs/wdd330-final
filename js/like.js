import { getLocalStorage } from "./utils.mjs";
import ViewSaved from "./viewSaved.mjs";

const save = new viewSaved("jo-save", ".product-list");
save.init();