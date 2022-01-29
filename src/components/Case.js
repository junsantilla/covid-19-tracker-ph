import React from 'react';
import { Container, Text } from '@chakra-ui/react';

const otherCase = (props) => {
	return (
		<Container
			display="flex"
			justifyContent="center"
			flexDirection="column"
			alignItems="center"
			backgroundColor="#eeeeee"
			p={0}
			boxShadow="base"
            
		>
			<Container
				display="block"
				p={[2, 4, 6]}
				backgroundColor={props.color || 'gray.500'}
				color="whiteAlpha.900"
			>
				<Text display="block" textAlign="center" fontWeight="bold" fontSize={{ base: '14px', md: '18px' }}>
					{props.title.toUpperCase()}
				</Text>
			</Container>
			<Text fontSize="4xl" fontWeight="bold" m={[2,3,4]} fontSize={{ base: '18px', md: '24px', lg: '30px' }}>
				{props.active.toLocaleString()}
			</Text>
		</Container>
	);
};

export default otherCase;
