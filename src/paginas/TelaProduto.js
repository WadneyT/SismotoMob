import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import api from '../services/api';

export default function ProdutosScreen() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    const response = await api.get('/produtos');
    setProdutos(response.data);
  }

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>

          <Text>{item.nome}</Text>

          <Text>
            R$ {item.preco}
          </Text>

        </View>
      )}
    />
  );
}