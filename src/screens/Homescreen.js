import React,
{
	useState
} from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	SafeAreaView,

	Dimensions,
} from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Hstack } from '../components';
import { BarChart } from 'react-native-charts-wrapper';
import {
	LineChart,
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width - 60;

const data = {
	labels: ["January", "February", "March", "April", "May", "June"],
	datasets: [
		{
			data: [20, 45, 28, 80, 99, 43],
			color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
			strokeWidth: 2 // optional
		}
	],
	legend: ["Rainy Days"] // optional
};
const chartConfig = {
	backgroundGradientFromOpacity: 0,
	backgroundGradientToOpacity: 0,
	color: (opacity = 1) => '#fff',
	strokeWidth: 3, // optional, default 3
	barPercentage: 0.5,
	useShadowColorFromDataset: false // optional
};

const chartConfig2 = {
	backgroundGradientFrom: "#1E2923",
	backgroundGradientFromOpacity: 0,
	backgroundGradientTo: "#08130D",
	backgroundGradientToOpacity: 0.5,
	color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
	strokeWidth: 2, // optional, default 3
	barPercentage: 0.5,
	useShadowColorFromDataset: false // optional
};
export const Myheader = (props) => {
	const navigation = useNavigation();
	function Mydrawer() {
		navigation.dispatch(DrawerActions.openDrawer());
	}
	return (

		<View>
			<Hstack
				centered
				between
				styles={{
					paddingHorizontal: 10,
					marginTop: 15,
				}} >
				<TouchableOpacity  onPress={() => Mydrawer()}>
					<MaterialCommunityIcons name='menu' size={30} color={props.color ? props.color : colors.white2} />
				</TouchableOpacity>
				<Text
					style={[styles.hometext, { color: props.color ? props.color : colors.white }]}>
					{props.title ? props.title : 'Home'}
				</Text>
				<TouchableOpacity>
					<MaterialCommunityIcons name='progress-star' size={30} color={props.color ? props.color : colors.white2} />
				</TouchableOpacity>
			</Hstack>
		</View>
	);
}

const Datenicon = () => {
	return (
		<View style={{
			marginLeft: 0,
		}}>
			<Hstack centered between>
				<View>

					<Text
						style={styles.dates}>
						Sep 2 -Sep 8
					</Text>
					<Text
						style={styles.dates2}>
						vs Aug 26 -Sep 1
					</Text>
				</View>
				<Hstack>
					<TouchableOpacity>
						<MaterialCommunityIcons
							name='arrow-left'
							size={30}
							style={{
								// marginLeft: 10,
							}}
							color={colors.black}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<MaterialCommunityIcons
							style={{
								marginLeft: 10,
							}} name='arrow-right' size={30} color={colors.white2} />

					</TouchableOpacity>
				</Hstack>
			</Hstack>

		</View>
	)
}

const Leftbarrier = () => {
	return (
		<View style={{
			height: 50,
			zIndex: 100,
			width: 40,
			marginRight: -40,
		}}>
			<View style={{
				height: 25,
				width: 20,
			}} />
			<View
				style={{
					backgroundColor: colors.color1,
					marginRight: 20,
				}}>
				<View style={{
					height: 25,
					width: 20,
					backgroundColor: colors.blue1,
					borderBottomLeftRadius: 25,
				}} />
			</View>
		</View>
	)
}
const Rightbarrier = () => {
	return (
		<View style={{
			height: 50,
			zIndex: 100,
			width: 40,
			marginRight: -40,
		}}>
			<View style={{
				height: 25,
				width: 20,
			}} />
			<View
				style={{
					backgroundColor: colors.color1,
					marginRight: 20,
				}}>
				<View style={{
					height: 25,
					width: 20,
					backgroundColor: colors.blue1,
					borderBottomLeftRadius: 25,
				}} />
			</View>
		</View>
	)
}

const Barrier2 = () => {
	return (
		<View style={{
			height: 50,
			zIndex: 100,
			width: 40,
			marginLeft: -40,
		}}>
			<View style={{
				height: 25,
				width: 20,
			}} />
			<View
				style={{
					backgroundColor: colors.color1,
					marginLeft: 20,
				}}>
				<View style={{
					height: 25,
					width: 20,
					backgroundColor: colors.blue1,
					borderBottomRightRadius: 25,
				}} />
			</View>
		</View>
	)
}
const Sessions = () => {
	const [active, setactive] = useState('Users')
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.color1,
				borderRadius: 30,
				marginTop: 10,

				borderTopRightRadius: 30,
			}} >
			<Hstack
				styles={{
					height: 50,
					backgroundColor: colors.blue1,
					borderTopLeftRadius: 30,
					borderTopRightRadius: 30,
				}}>
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() => setactive('Users')}
				>
					<Hstack
						styles={{ flex: 1 }}>
						<View
							style={[
								styles.aligns, active == 'Users' ? styles.activestyle : null
								, {
									// marginRight: -50
								}]}>
							<Text
								style={[active == 'Users' ? styles.activetext && { marginLeft: 10, } : styles.inactiveText && {
									// marginRight: 50,
									// backgroundColor: "green"
								}]}>
								Users
							</Text>
						</View>
						{active == 'Users' &&
							<Rightbarrier />
						}
					</Hstack>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setactive('Sessions')}
					style={[{ flex: 1 }]}
				>
					<Hstack
						styles={{ flex: 1 }}>
						{active == 'Sessions' &&
							<Barrier2 />
						}
						<View
							style={[styles.aligns, active == 'Sessions' ? styles.activestyle : null]}>

							<Text
								style={[active == 'Sessions' ? styles.activetext : styles.inactiveText]}>
								Sessions
							</Text>
						</View>
						{active == 'Sessions' &&
							<Leftbarrier />
						}
					</Hstack>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setactive('NewUsers')}
					style={[{ flex: 1 }]}
				>
					<Hstack
						styles={{ flex: 1 }}>
						{active == 'NewUsers' &&
							<Barrier2 />
						}
						<View
							style={[styles.aligns, active == 'NewUsers' ? styles.activestyle : null]}>
							<Text
								style={[active == 'NewUsers' ? styles.activetext : styles.inactiveText]}>
								Sessions
							</Text>
						</View>
					</Hstack >
				</TouchableOpacity>

			</Hstack >

			<View style={{
				flex: 1,
				// backgroundColor: 'green',
				padding: 15,
			}}>
				<Hstack centered between>
					<View>
						<Text
							style={{
								fontSize: 20,
								fontWeight: '400',
								fontFamily: 'Roboto',
								color: colors.white,

							}}>
							12,181
						</Text>
						<Text
							style={{
								fontSize: 12,
								fontWeight: '400',
								fontFamily: 'Roboto',
								color: colors.white,

							}}>
							+4.7K(+62.7%)
						</Text>
					</View>
					<View>
						<Hstack centered>
							<View style={{
								height: 10,
								width: 10,
								backgroundColor: colors.white,
								borderRadius: 50,
							}} />
							<Text
								style={{
									fontSize: 13,
									fontWeight: '400',
									fontFamily: 'Roboto',
									color: colors.white,
									marginLeft: 10,
								}}>
								Current Period
							</Text>
						</Hstack>
						<Hstack centered>
							<View style={{
								height: 10,
								width: 10,
								backgroundColor: colors.primary,
								borderRadius: 50,
							}} />
							<Text
								style={{
									fontSize: 13,
									fontWeight: '400',
									fontFamily: 'Roboto',
									color: colors.white,
									marginLeft: 10,
								}}>
								Comparison Period
							</Text>
						</Hstack>

					</View>
				</Hstack>
				<Chart2 />
			</View>
		</View >
	)
}

const data2 = {
	labels: ["January", "February", "March", "April", "May", "June"],
	datasets: [
		{
			data: [20, 45, 28, 80, 99, 43]
		}
	]
};
const Realtimegraph = () => {
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.container}>
				<BarChart
					data={data}
					width={screenWidth - 60}
					height={220}
					yAxisLabel="$"
					chartConfig={chartConfig2}
					verticalLabelRotation={30}
				/>
			</View>
		</View>
	)
}

const Chart2 = () => {
	return (
		<View>
			<LineChart
				data={data}
				width={screenWidth}
				height={120}
				// style={{ flex: 1 }}
				verticalLabelRotation={30}
				chartConfig={chartConfig}
				bezier
				withDots={false}
				withVerticalLines={false}
				// withShadow={false}

				strokeColor='green'
			/>
		</View>
	)
}
export default function Homescreen() {
	return (
		<SafeAreaView style={{
			flex: 1,
			backgroundColor: colors.primary,
		}}>
			<ScrollView contentContainerStyle={{
				flex: 1,
			}}>
				<View style={{
					flex: 1,
				}}>
					<Myheader />
					<View style={{
						marginVertical: 10,
						marginLeft: 10,
						flex: 1,

					}}>
						<Text
							style={styles.realtext}>
							Real time
						</Text>
						<Text
							style={styles.activeusertext}>
							Active users right now
						</Text>
						<Text
							style={styles.counts}>
							48
						</Text>
						<Realtimegraph />
					</View>
				</View>
				<View style={{
					flex: 1,
					backgroundColor: colors.white,
					padding: 15,
					borderTopLeftRadius: 30,
					borderTopRightRadius: 30,
				}}>
					<Datenicon />
					<Sessions />
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF'
	},
	chart: {
		flex: 1
	},
	inactiveText: {
		fontSize: 14,
		fontWeight: '400',
		fontFamily: 'Roboto',
		color: colors.text
	},
	aligns: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	realtext: {
		fontSize: 18,
		fontWeight: '500',
		fontFamily: 'Roboto',
		color: colors.white,
		marginTop: 15,
	},
	activeusertext: {
		fontSize: 14,
		fontWeight: '500',
		fontFamily: 'Roboto',
		color: colors.white2,
		marginTop: 5,
	},
	counts: {
		fontSize: 40,
		fontWeight: '500',
		fontFamily: 'Roboto',
		color: colors.white,
		marginVertical: 20,
	},
	dates: {
		fontSize: 19,
		fontWeight: '400',
		fontFamily: 'Roboto',
		color: colors.black
	},
	dates2: {
		fontSize: 14,
		fontWeight: '400',
		fontFamily: 'Roboto',
		color: '#99999990'
	},
	hometext: {
		fontSize: 17,
		fontWeight: '700',
		fontFamily: 'Roboto',
	},
	commonstyle: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
	},
	activetext: {
		fontSize: 14,
		fontWeight: '400',
		fontFamily: 'Roboto',
		color: colors.white
	},
	activestyle: {
		backgroundColor: colors.color1,
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		padding: 10,
	},

})