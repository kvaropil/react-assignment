import 'styled-components';

// Extend the default theme type
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      orange: string;
      beige: string;
      white: string;
      darkBlue: string;
      darkGrey: string;
      green: string;
    };
    mobileBreakpoint: string;
  }
}
