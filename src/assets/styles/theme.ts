export type ThemeTypes = {
  colors: {
    white: string;
    grey: string;
    darkGrey: string;
    lightGrey: string;
    black: string;
    lightPurple: string;
    darkPurple: string;
    yellow: string;
    lightYellow: string;
    red: string;
    darkRed: string;
    green: string;
  };
  fontSize: {
    xxl: string;
    xl: string;
    l: string;
    m: string;
    s: string;
  };
  standardTransition: string;
  grid: {
    templateColumns: string;
    gap: string;
  };
  borderRadius: string;
};

export const theme: ThemeTypes = {
  colors: {
    white: "#FFFFFF",
    grey: "#C0C7D6",
    darkGrey: "#737C8E",
    lightGrey: "#DFE2E8",
    black: "#111111",
    lightPurple: "#D458E6",
    darkPurple: "#850099",
    yellow: "#ed9e23",
    lightYellow: "#ffc76e",
    red: "#ff0000",
    darkRed: "#cc0000",
    green: "#11ca00",
  },
  fontSize: {
    xxl: "34px",
    xl: "24px",
    l: "17px",
    m: "14px",
    s: "11px",
  },
  standardTransition: "300ms all ease-in-out",
  grid: {
    templateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "40px",
  },
  borderRadius: "10px",
};
