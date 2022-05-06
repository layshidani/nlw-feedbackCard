import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { styles } from './styles';
import { theme } from './src/theme';
import { Widgets } from './src/components/Widgets';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Widgets />

      <StatusBar style='light' backgroundColor='transparent' translucent />
    </View>
  );
}
