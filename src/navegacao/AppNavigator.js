import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../paginas/Home';

import ListarProduto from '../paginas/Produto/ListarProduto';
import IncluirProduto from '../paginas/Produto/IncluirProduto';
import AlterarProduto from '../paginas/Produto/AlterarProduto';

import ListarCliente from '../paginas/Cliente/ListarCliente';
import IncluirCliente from '../paginas/Cliente/IncluirCliente';
import AlterarCliente from '../paginas/Cliente/AlterarCliente';

import ListarPedido from '../paginas/Pedido/ListarPedido';
import IncluirPedido from '../paginas/Pedido/IncluirPedido';
import AlterarPedido from '../paginas/Pedido/AlterarPedido';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Sismoto" }}
        />

        <Stack.Screen
          name="ListarProduto"
          component={ListarProduto}
          options={{ title: "Produtos" }}
        />

        <Stack.Screen
          name="IncluirProduto"
          component={IncluirProduto}
          options={{ title: "Novo Produto" }}
        />

        <Stack.Screen
          name="AlterarProduto"
          component={AlterarProduto}
          options={{ title: "Editar Produto" }}
        />

        <Stack.Screen
          name="ListarCliente"
          component={ListarCliente}
          options={{ title: "Clientes" }}
        />

        <Stack.Screen
          name="IncluirCliente"
          component={IncluirCliente}
          options={{ title: "Novo Cliente" }}
        />

        <Stack.Screen
          name="AlterarCliente"
          component={AlterarCliente}
          options={{ title: "Editar Cliente" }}
        />

        <Stack.Screen
          name="ListarPedido"
          component={ListarPedido}
          options={{ title: "Pedidos" }}
        />

        <Stack.Screen
          name="IncluirPedido"
          component={IncluirPedido}
          options={{ title: "Novo Pedido" }}
        />

        <Stack.Screen
          name="AlterarPedido"
          component={AlterarPedido}
          options={{ title: "Editar Pedido" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}