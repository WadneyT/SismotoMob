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

export default function AlterarProduto({ navigation, route }) {

  const produto = route.params.produto;

  const [nome, setNome] = useState(produto.nome);
  const [categoria, setCategoria] = useState(produto.categoria);
  const [descricao, setDescricao] = useState(produto.descricao);
  const [estoque, setEstoque] = useState(String(produto.estoque));
  const [preco, setPreco] = useState(String(produto.preco));
  const [ativo, setAtivo] = useState(produto.ativo);

  async function atualizar() {

    try {

      await api.put(`/produtos/${produto.id}`, {
        id: produto.id,
        nome,
        categoria,
        descricao,
        estoque: Number(estoque),
        preco: Number(preco),
        ativo
      });

      Alert.alert('Sucesso', 'Produto atualizado');
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
