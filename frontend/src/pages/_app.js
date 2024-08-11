import "@/styles/globals.css";
import "@gfazioli/mantine-flip/styles.css";
import "@gfazioli/mantine-flip/styles.layer.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default MyApp;
