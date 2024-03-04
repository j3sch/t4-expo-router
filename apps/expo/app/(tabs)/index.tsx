import { StyleSheet } from 'react-native'

import EditScreenInfo from '@/components/EditScreenInfo'
import { Text, View } from '@/components/Themed'
import { trpc } from '@/utils/trpc'
import { YStack } from 'tamagui'

export default function TabOneScreen() {
    const { data } = trpc.hello.world.useQuery<string>('world')

    return (
        <YStack backgroundColor={'$background0'} f={1} justifyContent='center'>
            <Text style={styles.title}>{data}</Text>
            <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
            <EditScreenInfo path='app/(tabs)/index.tsx' />
        </YStack>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})
