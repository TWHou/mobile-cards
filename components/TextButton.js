import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

import { light, midtone } from '../utils/colors';

export default function TextButton({
  children,
  onPress,
  btnStyle = {},
  textStyle = {}
}) {
  return (
    <TouchableOpacity style={[styles.btn, btnStyle]} onPress={onPress}>
      <Text style={[styles.btnText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    margin: 5,
    backgroundColor: midtone,
    alignItems: 'center',
    padding: 10
  },
  btnText: {
    color: light,
    fontSize: 18
  }
});
