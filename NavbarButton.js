import React from 'react-native';
const {
  Text,
  TouchableOpacity,
  Component,
  View,
  Image,
  PropTypes,
} = React;
import styles from './styles';

export default class NavbarButton extends Component {
  render() {
    const { style, tintColor, margin, title, handler } = this.props;

    return (
      <TouchableOpacity onPress={handler}>
        <View style={[style, {flexDirection: 'row', flex: 1}]}>
          <Text style={[this.props.textStyle, styles.navBarButtonText, { color: tintColor, }, ]}>{title}</Text>
          <Image source={this.props.backImg} style={this.props.backImgStyle} />

        </View>
      </TouchableOpacity>
    );
  }

  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    tintColor: PropTypes.string,
    title: PropTypes.string,
    handler: PropTypes.func,
  }

  static defaultProps = {
    style: {

    },
    title: '',
    tintColor: '#0076FF',
    onPress: () => ({}),
  }
}
