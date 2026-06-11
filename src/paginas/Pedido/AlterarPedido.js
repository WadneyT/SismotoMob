import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

import api from '../../servicos/api';

export default function AlterarPedido({ navigation, route }) {

  const pedido = route.params.pedido;

  const [data, setData] = useState(pedido.data);
  const [status, setStatus] = useState(pedido.status);
  const [total, setTotal] = useState(String(pedido.total));

  async function atualizar() {
    try {
      await api.put(`/pedidos/${pedido.id}`, {
        id: pedido.id,
        data,
        status,
        total: Number(total)
      });

      Alert.alert('Sucesso', 'Pedido atualizado');
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Falha ao atualizar');
    }
  }

  return (
    <ScrollView style={styles.container}>

      <Text>Data</Text>
      <TextInput
        style={styles.input}
        placeholder="2026-03-31"
        value={data}
        onChangeText={setData}
      />

      <Text>Status</Text>
      <TextInput
        style={styles.input}
        value={status}
        onChangeText={setStatus}
      />

      <Text>Total</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={total}
        onChangeText={setTotal}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={atualizar}
      >
        <Text style={styles.textoBotao}>
          Atualizar
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },

  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8
  },

  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
