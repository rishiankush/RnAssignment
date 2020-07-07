import React from 'react'
import { Platform, Text, View, Image, Linking, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import Style from './ExampleScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme'

class ExampleScreen extends React.Component {
  componentDidMount() {
    this._fetchUser()

    // console.log('user data ******* ',this.props.user)
  }

  showDialer = (phoneNum) => {
    console.log('phone number ******** ',phoneNum)
    // Linking.openURL(`tel:${phoneNum}`)
  }

  _renderItem = ({item, index}) => {
    // console.log('item is here ******** ',item)
    let str = item.name;
    let res = str.charAt(0);
    let colors = ['rgb(216,115,116)', 'rgb(125,165,217)', 'rgb(85,165,47)']
    return(
      <View style={{borderBottomWidth:1,borderBottomColor:'rgba(1,1,1,.3)'}}>
        <TouchableOpacity style={{padding:10,}} onPress={()=>this.props.navigation.navigate('ItemDetails',{itemData:item})}>
          <View style={{flexDirection:'row'}}>
            <View style={{ backgroundColor: colors[index % colors.length], height:30,width:30,borderRadius:15, alignItems:'center',justifyContent:'center' }}>
              <Text style={{color:'white'}}>{res}</Text>
            </View>
            <View style={{marginLeft:10,flex:.7}}>
              <Text style={{fontWeight:'500',fontSize:16}}>{item.name}</Text>
              <Text style={{fontSize:12}}>{item.categoryName}</Text>
              <Text style={{fontSize:12}}>{item.location}</Text>
              <Text style={{fontSize:12}}>{item.classLocPref}</Text>
            </View>
            <TouchableOpacity style={{alignItems:'center',flex:.3,justifyContent:'center'}} hitSlop={{left:10,right:10,top:10,bottom:10}} onPress={()=>Linking.openURL(`tel:${item.phoneNumber}`)}>
              <Image source={Images.phoneIcon} style={{height:30,width:30,resizeMode:'contain'}} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumVerticalMargin,
        ],{flex:1}}
      >
      <Text style={{textAlign:'center',marginVertical:10,fontSize:18}}>ENQUIRIES</Text>
      <FlatList
        data={this.props.user.dataList}
        renderItem={this._renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    )
  }

  _fetchUser() {
    this.props.fetchUser()
  }
}

ExampleScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)
