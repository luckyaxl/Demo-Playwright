import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Toaster />
      <Component {...pageProps} />
    </Provider>
  );
}
