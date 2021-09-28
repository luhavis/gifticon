import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import iconIcSearch from '../assets/images/iconIcSearchOn.svg';

export default function HeaderView() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>GIFTCON</Text>
      <Image source={iconIcSearch} style={styles.searchIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    marginTop: 24,
    marginLeft: 24,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logo: {
    paddingLeft: 0,
    width: 170,
    height: 21,
    fontSize: 16,
    color: '#28282d',
    fontWeight: '700',
  },
  searchIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
  },
});
