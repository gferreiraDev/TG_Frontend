import React from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "styled-components"
import { themes } from "./themes"

const Theme = ({children}) => {
  const { theme } = useSelector(rootState => rootState.theme)

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  )
}

export default Theme;