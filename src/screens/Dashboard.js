import React,
{
  Component,
  useState,
  useEffect,
  useRef
} from 'react';
import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  ImageBackground,
  FlatList,
  ViewPropTypes,
  Switch,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Myheader } from './Homescreen';
import Hstack from './../components/Hstack';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width - 60;
import Pie from 'react-native-pie'

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => '#222',
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};


const Numbertext = ({ title1, title2 }) => {
  return (
    <View>
      <Text
        style={styles.text1}>
        {title1}
      </Text>
      <Text
        style={styles.text2}>
        {title2}
      </Text>
    </View>
  )
}

const Newusers = () => {
  return (
    <View style={{
      padding: 15,
      backgroundColor: colors.white,
      marginTop: 30,
      borderRadius: 20,
    }}>

      <Numbertext title1='10,032' title2='New Users' />
      <Graphone />
    </View>
  )
}
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [1.3, 2, 1, 2.4, 3, 2.4, 2,],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
};
const Graphone = () => {
  return (
    <View style={{ marginTop: 10, }}>
      <LineChart
        data={data}
        width={screenWidth}
        height={156}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        bezier
        withVerticalLines={false}
        withVerticalLabels={false}
        withShadow={false}
        withScrollableDot={false}

      />
    </View>
  )
}

const data2 = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};
const Graph2 = () => {
  return (
    <View>
      <Pie
        radius={80}
        innerRadius={60}
        sections={[
          {
            percentage: 10,
            color: '#C70039',
          },
          {
            percentage: 20,
            color: '#44CD40',
          },
          {
            percentage: 30,
            color: '#404FCD',
          },
          {
            percentage: 40,
            color: '#EBD22F',
          },
        ]}
        dividerSize={4}
        strokeCap={'round'}
      />
    </View>
  )
}

const Usersessions = () => {
  return (
    <Hstack centered between styles={{
      marginTop: 30,
      // backgroundColor: '#7bc135'
    }} >
      <View style={{
        padding: 15,
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 1,
        marginRight: 10,
      }}>
        <Numbertext title1='12.2K' title2='Users' />

      </View>
      <View style={{
        padding: 15,
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 1,
        marginLeft: 10,
      }}>
        <Numbertext title1='14.7K' title2='Sessions' />
      </View>
    </Hstack>
  )
}

const Whereusers = () => {
  return (
    <View>
      <Text
        style={styles.Whereusers}>
        Where are yours users?
      </Text>
      <Hstack centered between styles={{
        marginTop: 20,
        // backgroundColor: '#7bc135'
      }} >
        <View style={styles.devicestyle}>
          <Text
            style={styles.devicetext}>
            By Device
          </Text>
          <Graph2 />
        </View>
        <View style={styles.counrtyview}>
          <Text
            style={styles.counrtytext}>
            By Country
          </Text>
        </View>
      </Hstack>
    </View>
  )
}
export default function Dashboard() {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#E2EDFA',
      padding: 10,

    }}>
      <ScrollView contentContainerStyle={{
        flex: 1,
      }}>
        <Myheader title='Dashboard' color='#50537A' />
        <Newusers />
        <Usersessions />
        <Whereusers />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Roboto',
    color: '#000000'
  },
  text2: {
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: '#00000090'
  },
  Whereusers: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: '#000',
    marginTop: 35,
  },
  devicestyle: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginRight: 10,
  },
  devicetext: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'Roboto',
    color: '#000'
  }, counrtyview: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    marginLeft: 10,
  },
  counrtytext: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'Roboto',
    color: '#000'
  }
})