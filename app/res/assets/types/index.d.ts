import { type Alpine } from "alpinejs";
import type Axios from "axios";

declare;
global;
{
    interface Window {
        Alpine: Alpine;
        axios: Axios;
    }
}
