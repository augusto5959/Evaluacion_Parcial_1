import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const vector: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export const Ejercicio1 = () => {
  const [pares, setPares] = useState<number[]>([]);
  const [impares, setImpares] = useState<number[]>([]);

  const clasificarNumeros = () => {
    const pares = vector.filter((num) => num % 2 === 0);
    const impares = vector.filter((num) => num % 2 !== 0);
    setPares(pares);
    setImpares(impares);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>BIENVENIDO</Text>
      <Text style={styles.vector}> Vector: {vector.join(",")}</Text>
      <TouchableOpacity style={styles.button} onPress={clasificarNumeros}>
        <Text style={styles.buttonText}>Clasificar</Text>
      </TouchableOpacity>
      <Text style={styles.vector}>Pares: {pares.join(",")} </Text>
      <Text style={styles.vector}>Impares: {impares.join(",")} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  titulo: {
    alignSelf: "center",
    padding: 40,
    fontSize: 30,
  },
  vector: {
    alignSelf: "center",
    padding: 40,
    fontSize: 18,
    color: "white",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "orange",
    padding: 20,
    justifyContent: "center",
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
  },
});
