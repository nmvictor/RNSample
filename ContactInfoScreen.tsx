import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {ContactInfoNavigationProps, RouteNames} from './App';
import {Avatar} from 'react-native-elements';

export function ContactInfoScreen({
  route,
  navigation,
}: ContactInfoNavigationProps): JSX.Element {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>

      <Avatar
        size="xlarge"
        rounded
        source={{
          uri: item.avatar,
        }}
        title="CR"
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
      />
      <Text style={styles.highlight}>{item.description}</Text>
      <Button
        title="Back to home"
        onPress={() => navigation.navigate(RouteNames.Home)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    margin: 10,
  },
  highlight: {
    fontWeight: '700',
    margin: 10,
  },
});
