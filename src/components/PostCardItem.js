import { StyleSheet, Text, View, TouchableOpacity,Linking,Alert, Button, } from 'react-native'
import React, {useCallback} from 'react'
import { Card } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

const Userbutton = ({ onPress, style, icon }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Feather name={icon} size={24} />
  </TouchableOpacity>
)

const OpenURLButton = ({url, children}) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
  };

export default function PostCardItem({ title, author, onEdit, onDelete }) {
console.log(title)
  return (
    <Card style={styles.item}>
      <View style={styles.rowView}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <OpenURLButton url={author}>Click</OpenURLButton>
          
        </View>
        <View style={styles.rowView}>
          <Userbutton
            onPress={onEdit}
            icon="edit"
            style={{ marginHorizontal: 16 }} />
          <Userbutton onPress={onDelete} icon='trash-2' />
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    padding: 16,
    margin: 9,
    elevation: 4,
    borderRadius: 8
  },
  title: {
    fontSize: 18,
  },
})