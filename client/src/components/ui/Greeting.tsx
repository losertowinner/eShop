import { GreetingProps } from "@/types/GreetingTypes";

const Greeting = ({ message }: GreetingProps) => {
	return <h3>Welcome {message} 😀</h3>;
};

export default Greeting;
