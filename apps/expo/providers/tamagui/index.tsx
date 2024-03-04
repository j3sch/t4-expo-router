import {
	TamaguiProvider as TamaguiProviderOG,
	createTamagui,
} from "@tamagui/core";
import { config } from "@tamagui/config/v3";
import "@tamagui/core/reset.css";

const tamaguiConfig = createTamagui(config);

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
	// biome-ignore lint/suspicious/noEmptyInterface: <explanation>
	interface TamaguiCustomConfig extends Conf {}
}

export const TamaguiProvider = ({
	children,
}: { children: React.ReactNode }): React.ReactNode => {
	return (
		<TamaguiProviderOG config={tamaguiConfig}>{children}</TamaguiProviderOG>
	);
};
