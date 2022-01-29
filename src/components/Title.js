import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';

const Title = (props) => {
	return (
		<Container
			maxWidth="container.md"
			pl={[5, 5, 5, 0]}
            pr={[5, 5, 5, 0]}
            pt={5}
            pb={7}
			display="flex"
			flexDirection="column"
		>
			<Heading>COVID-19 TRACKER | PHILIPPINES</Heading>
			<Text fontWeight="bold">As of {props.date}</Text>
		</Container>
	);
};

export default Title;
