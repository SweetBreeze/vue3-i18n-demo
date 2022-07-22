import { buildLocales } from './integrated';
import profile from "./zhs/profile"
import user from "./zhs/user"
// import menu from "./zhs/menu"

export default {
    ...buildLocales("profile",profile),
    ...buildLocales("user",user),
    // ...buildLocales("menu",menu),


}
