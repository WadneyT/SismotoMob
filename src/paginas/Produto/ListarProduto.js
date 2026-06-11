import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  StyleSheet
} from 'react-native';

import api from '../../servicos/api';

export default function ListarProduto({ navigation }) {

  const [produtos, setProdutos] = useState([]);

async function carregarProdutos() {
  try {
    console.log("Iniciando requisição");

    const response = await api.get("/produtos");

    console.log("Status:", response.status);
    console.log("Dados:", response.data);

    setProdutos(response.data);

  } catch (error) {
    console.log("Erro completo:", error);
    console.log("Mensagem:", error.message);

    if (error.response) {
      console.log("Response:", error.response.data);
    }
  }
}
useEffect(() => {
  console.log("Tela carregada");

  carregarProdutos();
}, []);
  async function excluirProduto(id) {
    try {
      await api.delete(`/produtos/${id}`);
      carregarProdutos();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir');
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarProdutos();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.botaoNovo}
        onPress={() => navigation.navigate('IncluirProduto')}
      >
        <Text style={styles.textoBotao}>
          Novo Produto
        </Text>
      </TouchableOpacity>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text>
              Categoria: {item.categoria}
            </Text>

            <Text>
              Estoque: {item.estoque}
            </Text>

            <Text>
              Preço: R$ {item.preco}
            </Text>

            <Text>
              Ativo: {item.ativo ? 'Sim' : 'Não'}
            </Text>

            <View style={styles.botoes}>

              <TouchableOpacity
                style={styles.editar}
                onPress={() =>
                  navigation.navigate('AlterarProduto', {
                    produto: item
                  })
                }
              >
                <Text style={styles.textoBotao}>
                  Editar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.excluir}
                onPress={() => excluirProduto(item.id)}
              >
                <Text style={styles.textoBotao}>
                  Excluir
                </Text>
              </TouchableOpacity>

            </View>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 10
  },

  botaoNovo: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },

  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold'
  },

  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  editar: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5
  },

  excluir: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5
  }

});