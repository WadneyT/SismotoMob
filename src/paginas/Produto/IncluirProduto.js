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

export default function IncluirProduto({ navigation }) {

  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [estoque, setEstoque] = useState('');
  const [preco, setPreco] = useState('');
  const [ativo, setAtivo] = useState(true);

  async function salvar() {

    try {

      await api.post('/produtos', {
        nome,
        categoria,
        descricao,
        estoque: Number(estoque),
        preco: Number(preco),
        ativo
      });

      Alert.alert('Sucesso', 'Produto cadastrado');
      navigation.goBack();

    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Falha ao cadastrar');
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

      <Text>Categoria</Text>
      <TextInput
        style={styles.input}
        value={categoria}
        onChangeText={setCategoria}
      />

      <Text>Descricao</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
      />

      <Text>Estoque</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={estoque}
        onChangeText={setEstoque}
      />

      <Text>Preco</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={preco}
        onChangeText={setPreco}
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

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15
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
