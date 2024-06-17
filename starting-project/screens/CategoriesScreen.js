import { View, Text, StyleSheet, FlatList, Pressable, Platform } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen() {
  console.log('categories', CATEGORIES);
  return (
    // <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <View style={[styles.gridItem, { backgroundColor: item.color }]}>
            <Pressable
              style={({ pressed }) => [styles.button, pressed ? styles.btnPressed : null]}
              android_ripple={{ color: '#ccc'}}
              onPress={() => console.log('pressed')}
            >
              <View styles={styles.innerContainer}>
                <Text>{item.title}</Text>
              </View>
            </Pressable>
          </View>
        )}
        keyExtractor={({ id }) => id}
        numColumns={2}
      />
    // </View>
  );
}

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  //   padding: 20,
  //   width: '100%',
  //   justifyContent: 'center',
  //   alergnItems: 'center',
  // },
  button: {
    flex: 1,
  },
  btnPressed: {
    opacity: 0.5,
  },
  gridItem: {
    height: 150,
    flex: 1,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 10,
    margin: 16,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
