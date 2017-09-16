import React, { Component } from 'react'
import {
  Text,
  View,
} from 'react-native'

import {
  List,
  ListItem,
  Icon,
  SocialIcon,
} from 'react-native-elements'

export default class NoticeMenu extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{marginLeft: 10, marginTop: 20, color: '#999999'}}>通知・・・</Text>
        <List>
          <ListItem
            title='App Store'
            titleStyle={{color: '#377EFF'}}
            subtitle='バッジ、バナー'
            subtitleStyle={{fontSize: 10}}
            leftIcon={{
              name: 'app-store',
              type: 'entypo',
            }}
            hideChevron={true}
          />
          <ListItem
            title='Podcast'
            subtitle='バッジ、バナー'
            subtitleStyle={{fontSize: 10}}
            leftIcon={{
              name: 'podcast',
              type: 'zocial',
              style: {
                padding: 1,
                paddingLeft: 4,
                paddingRight: 4,
                backgroundColor: '#8E38F6',
                color: 'white',
              }
            }}
            hideChevron={true}
          />
          <ListItem
            component={SocialListItem}
            socialIconType='facebook'
            socialIconTitle='Facebook'
            socialIconSubtitle='バッジ、サウンド、バナー'
          />
        </List>
      </View>
    )
  }
}

class SocialListItem extends Component {
  render() {
    return (
      <View
        style={{flexDirection: 'row'}}
      >
        <SocialIcon
          type={this.props.socialIconType}
          iconSize={16}
          raised={false}
          style={{marginLeft: 10, marginRight: 10}}
        />
        <View
          style={{flex: 1, paddingTop: 10, paddingBottom: 10}}
        >
          <Text style={{fontSize: 16, color: '#43484D'}}>{this.props.socialIconTitle}</Text>
          <Text style={{fontSize: 10, color: '#86839E', paddingTop: 2}}>{this.props.socialIconSubtitle}</Text>
        </View>
      </View>
    )
  }
}
