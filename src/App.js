import React from 'react'
import { StyleSheet, ScrollView, View } from 'react'
import Login from '..//Login'

const App = () => {
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.scrollView}
      >
        <View style={styles.body}>
          <Login />
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    margin: 20,
  },
})

export default App