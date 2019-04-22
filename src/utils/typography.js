import Typography from "typography"
import FairyGatesTheme from "typography-theme-fairy-gates"

FairyGatesTheme.overrideThemeStyles = () => {
  return {
    a: {
      textShadow: "none",
      backgroundImage: "unset",
    },
  }
}

const typography = new Typography(FairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
