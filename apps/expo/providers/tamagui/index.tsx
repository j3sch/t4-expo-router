import { TamaguiProvider as TamaguiProviderOG } from '@tamagui/core'
import '@tamagui/core/reset.css'
import { config as tamaguiConfig } from '../../tamagui.config'

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
    // biome-ignore lint/suspicious/noEmptyInterface: <explanation>
    interface TamaguiCustomConfig extends Conf {}
}

export const TamaguiProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
    return <TamaguiProviderOG config={tamaguiConfig}>{children}</TamaguiProviderOG>
}
