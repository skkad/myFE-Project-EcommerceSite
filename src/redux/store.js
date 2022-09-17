import rootReducers from "./reducer/index";
import { createStoreHook } from "react-redux";

const store = createStoreHook(rootReducers);

export default store;