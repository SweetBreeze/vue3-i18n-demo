import { defineStore } from "pinia";

interface langState {
    lang: string;
}
export const useLangStore = defineStore({
    id: "lang",
    state: (): langState => {
        return {
            lang: "zh",
        };
    },
    // 数据持久化-缓存
    persist: {
        enabled: true,
    },
    actions: {
        setLang(payload: string) {
            this.lang = payload;
        },
        getLang() {
            let val = sessionStorage.getItem("lang");
            let json = val ? JSON.parse(val) : "";
            return json.lang;
        },
        removeLang() {
            sessionStorage.removeItem("lang");
        },
    },
});
