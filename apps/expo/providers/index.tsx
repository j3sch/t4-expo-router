import { SafeAreaProvider } from "./safe-area";
import { TRPCProvider } from "./trpc";

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<SafeAreaProvider>
			<TRPCProvider>{children}</TRPCProvider>
		</SafeAreaProvider>
	);
}
