import { type Alpine } from "alpinejs";
import type Axios from "axios";

export {};

declare;
global;
{
    interface Window {
        Alpine: Alpine;
        axios: Axios;
    }
}
