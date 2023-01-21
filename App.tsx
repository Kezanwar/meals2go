import { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

//
import { colors } from './src/theme/colors'
import fonts, { fontAssets } from './src/theme/fonts'

export default function App() {
  const [didLoad, setDidLoad] = useState(false)

  // assets preloading
  const handleLoadAssets = async () => {
    try {
      // await Promise.all([...imageAssets, ...fontAssets])
      await Promise.all([...fontAssets])
      setDidLoad(true)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleLoadAssets()
  }, [])

  return didLoad ? (
    <SafeAreaView style={styles.safeAreaStyles}>
      <StatusBar style="auto" />
      <View style={styles.searchBar}></View>
      <View style={styles.listContainer}>
        <Text style={{ fontFamily: fonts.bold }}></Text>
      </View>
    </SafeAreaView>
  ) : null
}

const styles = StyleSheet.create({
  safeAreaStyles: { flex: 1 },
  searchBar: { padding: 20, backgroundColor: colors.lightOrange },
  listContainer: { flex: 1, padding: 20, backgroundColor: colors.white },
})
