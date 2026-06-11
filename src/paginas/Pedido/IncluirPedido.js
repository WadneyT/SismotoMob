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

export default function IncluirPedido({ navigation }) {

  const [data, setData] = useState('');
  const [status, setStatus] = useState('');
  const [total, setTotal] = useState('');

  async function salvar() {
    try {
      await api.post('/pedidos', {
        data,
        status,
        total: Number(total)
      });

      Alert.alert('Sucesso', 'Pedido cadastrado');
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Falha ao cadastrar');
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
        onPress={salvar}
      >
        <Text style={styles.textoBotao}>
          Salvar
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
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 8
  },

  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
