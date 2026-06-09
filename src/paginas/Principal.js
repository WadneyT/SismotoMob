import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {

  return (
    <View>

      <Button
        title="Produtos"
        onPress={() => navigation.navigate('Produtos')}
      />

    </View>
  );
}