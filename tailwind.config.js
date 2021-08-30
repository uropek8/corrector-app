module.exports = {
  purge: [],
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        xxl: "660px",
      },
      minWidth: {
        50: "12.5rem",
      },
      width: {
        submit: "16.25rem",
        field: "345px",
      },
      minHeight: {
        50: "12.5rem",
      },
      height: {
        15: "3.75rem",
        17: "4.25rem",
        logo: "4.875rem",
      },
      gridTemplateColumns: {
        17: "17fr 6fr",
      },
      padding: {
        15: "3.75rem",
        27: "6.75rem",
      },
      margin: {
        field: "1.875rem",
        head: "4.375rem",
        30: "7.5rem",
      },
      boxShadow: {
        presubmit: "0 7px 14px 0 rgba(0,0,0,.16);",
        submit: "0 11px 19px 0 rgba(0,0,0,.16);",
        field: "0 15px 66px 0 rgba(0,0,0,.04);",
      },
      outline: {
        blue: "1px solid #0000ff",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "Arial", "sans-serif"],
    },
  },
  variants: {
    extend: {
      textColor: ["disabled"],
      backgroundColor: ["disabled"],
      boxShadow: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
