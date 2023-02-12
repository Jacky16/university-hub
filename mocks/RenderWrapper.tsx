import { QueryClient, QueryClientProvider } from "react-query";
import { ReactElement } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

interface RenderWrapperProps {
  children: ReactElement;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const RenderWrapper = ({ children }: RenderWrapperProps) => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </ChakraProvider>
);

export default RenderWrapper;
