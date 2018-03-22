import React from 'react'
import {Notifications, Permissions} from 'expo'
import {AsyncStorage} from 'react-native'

const NOTIFICATION_KEY = 'UdaciCards:notifications'

export function clearNotification(){
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
  .then(Notifications.cancelAllScheduledNotificationsAsync())
}

export function createNotification(){
  return{
    title: 'You become what you study',
    body: '👋 Remember to study and take a quiz today!',
    ios:{
      sound: true,
    },
    android:{
      sound:true,
      priority: 'high',
      sticky:false,
      vibrate: true,
    }
  }
}

export function setLocalNotification(){
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data)=>{
      if(data === null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({status})=>{
          if(status === 'granted'){
            Notifications.cancelAllScheduledNotificationsAsync()

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate()+1)
            tomorrow.setHours(18)
            tomorrow.setMinutes(0)

            Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: tomorrow,
                repeat: 'day',
              }
            )

            AsyncStorage.setItem(NOTIFICATION_KEY,JSON.stringify(true))
          }
        })
      }
    })
}