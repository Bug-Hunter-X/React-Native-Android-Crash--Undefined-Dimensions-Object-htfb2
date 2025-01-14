import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [screenDimensions, setScreenDimensions] = useState(null);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
      setScreenDimensions({ window, screen });
    });
    return () => subscription?.remove(); // Cleanup
  }, []);

  if (!screenDimensions) {
    return <View><Text>Loading Dimensions...</Text></View>; //loading state
  }

  return (
    <View style={styles.container}>
      <Text>Screen Width: {screenDimensions.window.width}</Text>
      <Text>Screen Height: {screenDimensions.window.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});