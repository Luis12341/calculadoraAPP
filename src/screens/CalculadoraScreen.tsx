import React from 'react';
import { Text, View } from 'react-native';
import { ButtonCalc } from 'src/components';
import { useCalculadora } from 'src/hooks';
import { styles } from 'src/theme/appTheme';

const CalculadoraScreen = () => {
  const {
    reset,
    del,
    assembleNumber,
    setPositiveNegative,
    addUp,
    subtract,
    multiply,
    divide,
    calcular,
    numberBefore,
    number,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoSmall}>
        {numberBefore !== '0' && numberBefore}
      </Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.fila}>
        <ButtonCalc onPress={reset} text="C" color="#9b9b9b" />
        <ButtonCalc text="+/-" color="#9b9b9b" onPress={setPositiveNegative} />
        <ButtonCalc text="del" color="#9b9b9b" onPress={del} />
        <ButtonCalc text="/" color="#ff9427" onPress={divide} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="7" onPress={assembleNumber} />
        <ButtonCalc text="8" onPress={assembleNumber} />
        <ButtonCalc text="9" onPress={assembleNumber} />
        <ButtonCalc text="X" color="#ff9427" onPress={multiply} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="4" onPress={assembleNumber} />
        <ButtonCalc text="5" onPress={assembleNumber} />
        <ButtonCalc text="6" onPress={assembleNumber} />
        <ButtonCalc text="-" color="#ff9427" onPress={subtract} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="1" onPress={assembleNumber} />
        <ButtonCalc text="2" onPress={assembleNumber} />
        <ButtonCalc text="3" onPress={assembleNumber} />
        <ButtonCalc text="+" color="#ff9427" onPress={addUp} />
      </View>
      <View style={styles.fila}>
        <ButtonCalc text="0" width onPress={assembleNumber} />
        <ButtonCalc text="." onPress={assembleNumber} />
        <ButtonCalc text="=" color="#ff9427" onPress={calcular} />
      </View>
    </View>
  );
};

export default CalculadoraScreen;
