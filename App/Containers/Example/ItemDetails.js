import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'

class ItemDetails extends React.Component {
  render() {
      console.log('navigation props ***** ',this.props.navigation)
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumVerticalMargin,
        ],{flex:1}}
      >
        <Text style={{textAlign:'center',marginVertical:10,fontSize:18}}>Individual Details</Text>
        <View style={{padding:10}}>
            <Text style={{fontWeight:'500',fontSize:16}}>Name: {this.props.navigation.state.params.itemData.name}</Text>
            <Text style={{fontWeight:'500',fontSize:16}}>Class: {this.props.navigation.state.params.itemData.categoryName}</Text>
            <Text style={{fontWeight:'500',fontSize:16}}>Address: {this.props.navigation.state.params.itemData.location}</Text>
            <Text style={{fontWeight:'500',fontSize:16}}>Currently located at: {this.props.navigation.state.params.itemData.classLocPref}</Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
//   user: state.example.user,
//   userIsLoading: state.example.userIsLoading,
//   userErrorMessage: state.example.userErrorMessage
})

const mapDispatchToProps = (dispatch) => ({
//   fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  null,
  null
)(ItemDetails)
