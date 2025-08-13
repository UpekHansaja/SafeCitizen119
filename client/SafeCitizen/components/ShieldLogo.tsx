import { COLORS } from '@/constants/Welcome';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface ShieldLogoProps {
  size?: number;
}

export function ShieldLogo({ size = 200 }: ShieldLogoProps) {
  const styles = createStyles(size);

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/shield.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const createStyles = (size: number) => StyleSheet.create({
  container: {
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});
