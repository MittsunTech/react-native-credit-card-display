import * as React from 'react';
import { StyleSheet, View, StatusBar, Button } from 'react-native';
import CreditCardDisplay from 'react-native-credit-card-display';

export default function App() {
  const [card2Flipped, setCard2Flipped] = React.useState(true);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.cardContainer}>
        <CreditCardDisplay
          number={4242424242424242}
          cvc={123}
          expiration="06/21"
          name="John J. Doe"
        />
      </View>
      <View style={styles.cardContainer}>
        <CreditCardDisplay
          number={4242424242424242}
          cvc={123}
          expiration="06/21"
          name="John J. Doe"
          since={2004}
          height={126}
          width={200}
          fontSize={12}
          friction={10}
          flipped={card2Flipped}
        />
        <Button onPress={() => setCard2Flipped(!card2Flipped)} title="Flip" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    marginVertical: 50,
  },
});