import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import successImg from '../../assets/success.png'
import { Copyright } from '../Copyright';

export function Success() {
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />

      <Text style={styles.title}>Agradecemos o feedback.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}