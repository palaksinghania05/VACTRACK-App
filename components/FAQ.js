import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default function Faq() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Text style={styles.question}>
            1. How long will I remain protected after vaccination?
          </Text>
          <Text>
            Longevity of the immune response in vaccinated individuals is yet to
            be determined. Hence, continuing the use of masks, handwashing,
            physical distancing and other COVID-19 appropriate behaviours is
            strongly recommended.
          </Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.question}>
            2. Does vaccination protect me against newer strains/mutated virus
            of SARS-CoV 2?
          </Text>
          <Text>
            The body responds to vaccination by making more than one type of
            antibodies to virus parts including spike protein. Therefore, all
            vaccines are expected to provide reasonable amount of protection
            against the mutated virus also. Based on the available data the
            mutations as reported are unlikely to make the vaccine ineffective.
          </Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.question}>
            3. What precautions I need to take after receiving the vaccine?
          </Text>
          <Text>
            Both the vaccines are safe but in case of any discomfort or
            complaint, ask the beneficiary to visit the nearest health facility
            and/or call the health worker whose phone number is given in the
            Co-WIN SMS received after vaccination.
          </Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.question}>
            4. Is it important for me to receive the same vaccine during second
            dose?
          </Text>
          <Text>
            As the vaccines available are not interchangeable, it is important
            to receive the second dose of same vaccine as the first one. The
            Co-WIN portal is also going to help to ensure that everyone receives
            the same vaccine.
          </Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.question}>
            5. If one is taking medicines for illnesses like Cancer, Diabetes,
            Hypertension etc, can she/he take the COVID-19 vaccine and/or If I
            suffer from HTN/DM/CKD/heart disease/lipid disorders etc., can I
            safely take this vaccine?
          </Text>
          <Text>
            Yes, persons with one or more of these comorbid conditions are
            considered among the high risk category. They need to get COVID-19
            vaccination. Overall, the vaccine is safe and efficacious in adults
            with comorbidity. The maximum benefit of getting the COVID-19
            vaccine is for those who have such co-morbidities. However, if you
            are concerned for any specific reason, please consult your doctor.
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c2732',
  },
  card: {
    width: 280,
    alignItems: 'center',
    margin: 10,
    padding: 20,
  },
  question: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
