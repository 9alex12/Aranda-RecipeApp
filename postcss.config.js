import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    postcssPresetEnv({
      stage: 1, // Habilita características modernas como @container
    }),
  ],
};
