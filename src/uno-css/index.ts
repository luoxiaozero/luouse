import { Preset } from "unocss";

export const unoCSSPreset: Preset = {
    name: "luouse-preset",
    rules: [
        [
            /^w-(\d*)best$/,
            ([_, num]) => {
                if (num === "") {
                    num = "100";
                }
                return { width: `${num}%` };
            },
        ],
    ],
};
