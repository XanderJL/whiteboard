import { CSSReset, ThemeProvider } from "@chakra-ui/core"
import { DragDropContext } from "react-beautiful-dnd"

function MyApp({ Component, pageProps }) {
  return (
  <DragDropContext>
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  </DragDropContext>
  )
}

export default MyApp
