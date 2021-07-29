import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const Home = () => {
  const url = 'https://api.covid19api.com/summary';

  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchCovidData = async () => {
      setIsloading(true);
      try {
        const result = await fetch(url);
        const response = await result.json();
        setData(response);
        setIsloading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCovidData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.covidHeading}>COVID19 UPDATES</Text>
      <View style={styles.cards}>
        <View style={styles.card}>
          <Text style={styles.head}>Total Cases:</Text>
          <Text style={styles.foot}>
            {data ? data.Global.TotalConfirmed : 0}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.head}>Recovered:</Text>
          <Text style={styles.foot}>
            {data ? data.Global.TotalRecovered : 0}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.head}>Deaths Reported:</Text>
          <Text style={styles.foot}>{data ? data.Global.TotalDeaths : 0}</Text>
        </View>
      </View>
      <View style={styles.caution}>
        <Icon name={'injection-syringe'} size={35} color="white" />
        <Text style={styles.head}>GET VACCINATED TODAY!!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  covidHeading: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 80,
  },
  card: {
    width: 200,
    backgroundColor: '#1c2732',
    borderRadius: 15,
    elevation: 4,
    margin: 10,
    padding: 10,
    color: 'white',
  },
  head: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  foot: {
    fontSize: 15,
    color: 'white',
  },
  caution: {
    width: 300,
    backgroundColor: 'green',
    borderRadius: 15,
    elevation: 4,
    margin: 50,
    padding: 20,
    color: 'white',
  },
});

export default Home;
