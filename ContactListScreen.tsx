import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, SafeAreaView, StatusBar} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import Contact from './models/Contact';
import { ContactInfoNavigationProps, RouteNames } from './App';

export function ContactListScreen(
  props: ContactInfoNavigationProps,
): JSX.Element {
  const [data, setData] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = useCallback(async () => {
    fetch('https://655e26209f1e1093c59a9a58.mockapi.io/rnsample/api/v1/users/')
      .then(resp => {
        console.log('Response ', resp);
        return resp.json();
      })
      .then(json => {
        console.log('JSON ', json);
        setData(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  function onItemClickHandler(item: Contact) {
    props.navigation.navigate(RouteNames.ContactInfo, {item: item});
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        data.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => onItemClickHandler(l)}>
            <Avatar source={{uri: l.avatar}} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.description}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  highlight: {
    fontWeight: '700',
  },
});
