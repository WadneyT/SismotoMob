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

export default function ListarPedido({ navigation }) {

  const [pedidos, setPedidos] = useState([]);

  async function carregarPedidos() {
    try {
      const response = await api.get('/pedidos');
      setPedidos(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Nao foi possivel carregar os pedidos');
    }
  }

  async function excluirPedido(id) {
    try {
      await api.delete(`/pedidos/${id}`);
      carregarPedidos();
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Nao foi possivel excluir');
    }
  }

  useEffect(() => {
    carregarPedidos();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarPedidos();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.botaoNovo}
        onPress={() => navigation.navigate('IncluirPedido')}
      >
        <Text style={styles.textoBotao}>
          Novo Pedido
        </Text>
      </TouchableOpacity>

      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.nome}>
              Pedido #{item.id}
            </Text>

            <Text>
              Data: {item.data}
            </Text>

            <Text>
              Status: {item.status}
            </Text>

            <Text>
              Total: R$ {item.total}
            </Text>

            <View style={styles.botoes}>

              <TouchableOpacity
                style={styles.editar}
                onPress={() =>
                  navigation.navigate('AlterarPedido', {
                    pedido: item
                  })
                }
              >
                <Text style={styles.textoBotao}>
                  Editar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.excluir}
                onPress={() => excluirPedido(item.id)}
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
