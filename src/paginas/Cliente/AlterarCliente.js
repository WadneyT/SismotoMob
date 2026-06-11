import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Alert,
  ScrollView
} from 'react-native';

import api from '../../servicos/api';

export default function AlterarCliente({ navigation, route }) {

  const cliente = route.params.cliente;

  const [nome, setNome] = useState(cliente.nome);
  const [email, setEmail] = useState(cliente.email);
  const [telefone, setTelefone] = useState(cliente.telefone);
  const [ativo, setAtivo] = useState(cliente.ativo);

  async function atualizar() {
    try {
      await api.put(`/clientes/${cliente.id}`, {
        id: cliente.id,
        nome,
        email,
        telefone,
        ativo
      });

      Alert.alert('Sucesso', 'Cliente atualizado');
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Falha ao atualizar');
    }
  }

  return (
    <ScrollView style={styles.container}>

      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text>Email</Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Telefone</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
      />

      <View style={styles.switchContainer}>
        <Text>Ativo</Text>
        <Switch
          value={ativo}
          onValueChange={setAtivo}
        />
      </View>

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

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15
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
