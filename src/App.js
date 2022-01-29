import React from 'react';
import { ChakraProvider, Container, Grid, Text, Link } from '@chakra-ui/react';
import Title from './components/Title';
import Case from './components/Case';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: {},
			DataisLoaded: false,
		};
	}

	componentDidMount() {
		const url = 'https://covid19-api-philippines.herokuapp.com/api/summary';
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true,
				});
			});
	}

	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded)
			return (
				<div>
					<h1> Pleses wait some time.... </h1>{' '}
				</div>
			);

		return (
			<div className="App">
				<ChakraProvider>
					<Title date={items.last_update} />
					<Container maxWidth="container.md" p={0}>
						<Grid templateColumns="repeat(3, 1fr)" gap={6} mb={5}>
							<Case
								title="Total"
								color="red.500"
								active={items.data.total}
							/>
							<Case
								title="Active"
								color="blue.500"
								active={items.data.active_cases}
							/>
							<Case
								title="Recovered"
								color="green.500"
								active={items.data.recoveries}
							/>
							<Case
								title="Deaths"
								color="yellow.500"
								active={items.data.deaths}
							/>

							<Case
								title="Recovery Rate"
								active={items.data.recovery_rate}
							/>
							<Case
								title="Fitality Rate"
								active={items.data.fatality_rate}
							/>
						</Grid>
						<Text
							pt={2}
							pl={[5, 5, 5, 0]}
							pr={[5, 5, 5, 0]}
							fontWeight="bold"
						>
							Data Source:{' '}
						</Text>
						<Text pl={[5, 5, 5, 0]} pr={[5, 5, 5, 0]}>
							<Link
								color="teal.500"
								href="https://covid19-api-philippines.herokuapp.com"
								isExternal
							>
								https://covid19-api-philippines.herokuapp.com
							</Link>
						</Text>
					</Container>
				</ChakraProvider>
			</div>
		);
	}
}

export default App;
