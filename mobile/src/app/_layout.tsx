import { Stack } from 'expo-router/stack';

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name='(shop)'
				options={{ headerShown: false }}
			/>
		</Stack>
	);
}
