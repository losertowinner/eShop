import Greeting from '@/components/Greeting';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
	return (
		<View>
			<View>
				<Text>Hello World</Text>
				<Greeting />
				<Link href='/about'>About</Link>
			</View>
		</View>
	);
}
