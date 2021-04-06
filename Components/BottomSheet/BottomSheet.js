import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import { MARKERS_DATA } from '../../data/markers';
import { ListItem } from './ListItem';

import LocationSearch from '../LocationSearch/index';

const windowHeight = Dimensions.get('window').height;


export function BottomSheet({ onPressElement }) {
  return (
    <ScrollBottomSheet
      componentType="ScrollView"
      snapPoints={[100, '90%', windowHeight - 200]}
      initialSnapIndex={1}
      renderHandle={() => (
        <View style={styles.header}>
          <View style={styles.panelHandle} />
          <LocationSearch
          /*notifyChange={(loc) => this.getCoordsFromName(loc)}*/
          />
        </View>
      )}
      
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => (
        <ListItem item={item} onPressElement={onPressElement} />
      )}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
  },
  panelHandle: {
    width: 41,
    height: 4,
    backgroundColor: '#E1E1E1',
    borderRadius: 17,
  },
});