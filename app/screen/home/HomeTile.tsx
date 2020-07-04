import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const $lightgrey = '#D3D3D3';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: $lightgrey,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 150,
    justifyContent: 'center',
    marginBottom: 20,
    width: '90%',
  },
});

interface Props {
  title: string;
  callback?: () => void;
}

const HomeTile: React.FC<Props> = (props: Props) => {

  return (
    <TouchableOpacity style={styles.container} onPress={props.callback} >
      <Text>{props.title} </Text>
    </TouchableOpacity>
  );
};


export default HomeTile;
