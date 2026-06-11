import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 40,
        }}
      >
        🏍️ Sismoto
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#007bff',
          padding: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate('ListarProduto')}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Produtos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#28a745',
          padding: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate('ListarCliente')}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Clientes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#dc3545',
          padding: 15,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('ListarPedido')}
      >
        <Text style={{ color: '#fff', textAlign: 'center' }}>
          Pedidos
        </Text>
      </TouchableOpacity>
    </View>
  );
}