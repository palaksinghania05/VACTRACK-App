import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class Slot extends React.Component {
  state = {
    pinCode: null,
    date: null,
    locations: [],
  };
  handlePinCode = (value) => {
    this.setState({
      pinCode: value,
    });
  };

  submit = () => {
    fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${this.state.pinCode}&date=${this.state.date}`,
      {
        method: 'GET',
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log('Result:', response);
        this.setState({
          locations: response['sessions'],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginTop: 25, paddingRight: 9, color: 'white' }}>
            Pincode
          </Text>
          <TextInput
            placeholder="Enter the pincode"
            placeholderTextColor="#000"
            keyboardType={'number-pad'}
            style={styles.inputField}
            onChangeText={this.handlePinCode}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ marginTop: 12, paddingRight: 10, color: 'white' }}>
            Date
          </Text>
          <DatePicker
            style={{ width: 220, paddingLeft: 20, color: 'white' }}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            placeholderTextColor="#000"
            color="#000"
            format="DD-MM-YYYY"
            minDate="01-01-2020"
            maxDate="31-12-2022"
            confirmBtnText="Ok"
            cancelBtnText="Cancel"
            onDateChange={(date) => {
              this.setState({ date: date });
            }}
          />
        </View>

        <TouchableOpacity onPress={this.submit}>
          <Text style={styles.btn}>Get the Centers</Text>
        </TouchableOpacity>

        {this.state.locations.length === 0 ? (
          <Text
            style={{
              fontSize: 19,
              fontWeight: 'bold',
              marginVertical: 10,
              color: 'white',
            }}>
            No Centers Found
          </Text>
        ) : (
          <ScrollView>
            <View>
              {this.state.locations.map((location, index) => {
                return (
                  <View key={index} style={styles.card}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                      }}>
                      {location.name}
                    </Text>
                    <Text style={{ fontSize: 12, color: 'white' }}>
                      {location.vaccine}
                    </Text>
                    <Text style={{ fontSize: 12, color: 'white' }}>
                      Available Vaccines: {location.available_capacity}
                    </Text>
                    <Text style={{ fontSize: 12, color: 'white' }}>
                      Min. Age: {location.min_age_limit}
                    </Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  inputField: {
    width: 200,
    height: 50,
    borderColor: 'white',
    borderWidth: 2,
   // outline: 'none',
    borderRadius: 20,
    marginVertical: 10,
    paddingLeft: 30,
    color: 'white',
  },
  btn: {
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
    elevation: 4,
    width: 150,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  card: {
    width: 350,
    backgroundColor: '#1c2732',
    borderRadius: 15,
    elevation: 4,
    margin: 10,
    padding: 10,
  },
});

