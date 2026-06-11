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

export default function ListarCliente({ navigation }) {

  const [clientes, setClientes] = useState([]);

  async function carregarClientes() {
    try {
      const response = await api.get('/clientes');
      setClientes(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Nao foi possivel carregar os clientes');
    }
  }

  async function excluirCliente(id) {
    try {
      await api.delete(`/clientes/${id}`);
      carregarClientes();
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Nao foi possivel excluir');
    }
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      carregarClientes();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.botaoNovo}
        onPress={() => navigation.navigate('IncluirCliente')}
      >
        <Text style={styles.textoBotao}>
          Novo Cliente
        </Text>
      </TouchableOpacity>

      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text>
              Email: {item.email}
            </Text>

            <Text>
              Telefone: {item.telefone}
            </Text>

            <Text>
              Ativo: {item.ativo ? 'Sim' : 'Nao'}
            </Text>

            <View style={styles.botoes}>

              <TouchableOpacity
                style={styles.editar}
                onPress={() =>
                  navigation.navigate('AlterarCliente', {
                    cliente: item
                  })
                }
              >
                <Text style={styles.textoBotao}>
                  Editar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.excluir}
                onPress={() => excluirCliente(item.id)}
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
