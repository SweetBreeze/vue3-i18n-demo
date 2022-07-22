import { buildLocales } from "./integrated";
import profile from "./ens/profile";
import user from "./ens/user";
import menu from "./ens/menu";

export default {
    ...buildLocales("profile", profile),
    ...buildLocales("user", user),
    ...buildLocales("menu", menu),
};
