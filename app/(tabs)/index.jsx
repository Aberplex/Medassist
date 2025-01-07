import { StyleSheet, Pressable, Text, View} from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
          <ThemedText type="title">Medassist</ThemedText>
        </View>
        
        <Link href="login" asChild>
          <Pressable style={styles.button}> 
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}> Log In </Text>
          </Pressable>
        </Link>

        <Link href="signup" asChild>
          <Pressable style={styles.button}> 
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold',}}> Sign Up </Text>
          </Pressable>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(161, 206, 220, 1)',
    alignItems: 'center',
  },

  titleContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    gap: 8,
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
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 8,
    fontWeight: 'bold',
  },
});
