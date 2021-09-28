import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Title(props) {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    width: '100%',
    marginLeft: '24px',
    flex: 4,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  titleText: {
    marginLeft: '24px',
    fontSize: 20,
    lineHeight: 29,
    fontWeight: '700',
    color: '#141415',
  },
});
