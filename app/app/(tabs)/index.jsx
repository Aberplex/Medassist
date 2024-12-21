import { Image, StyleSheet, Platform, Pressable, Text, View} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <View style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </View>
        <Link href="/(tabs)/login" asChild>
          <Pressable style={styles.button}> 
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}> Log In </Text>
          </Pressable>
        </Link>

        <Link href="/(tabs)/signup" asChild>
          <Pressable style={styles.button}> 
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}> Sign Up </Text>
          </Pressable>
        </Link>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },

  button: {
    backgroundColor: 'rgb(1, 101, 252)',
    width: 100,
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'bold',
  }
});
