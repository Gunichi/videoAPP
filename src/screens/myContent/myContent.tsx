import React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export function myContent() {

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meu conteúdo</Text>

      <List.Section title="Conteúdos">
        <List.Accordion
          title="O que são os fundos imobiliários?"
          left={props => <List.Icon {...props} icon="play" />}>
          <View>
            <Text>Fundos financeiros</Text>
            <Text>Entendendo</Text>
          </View>
        </List.Accordion>

      </List.Section>

    </SafeAreaView>
  );
}