import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../Redux/reducer";
import { composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";


const store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk)));

export default store;