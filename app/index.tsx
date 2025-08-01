import { Checkbox, Button, Switch } from 'react-native-paper';
import { View, Text } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

const HomeScreen = () => {
  const [checked, setChecked] = React.useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const primaryColor = useThemeColor({}, 'primary');
  const backgroundColor = useThemeColor({}, 'icon');

  return (
    <View className="bg-light-background dark:bg-dark-background pt-40 px-2">
      <Text className="text-light-text dark:text-dark-text">HomeScreen</Text>
      <Button
        className="bg-white"
        // disabled
        textColor={primaryColor}
        buttonColor={backgroundColor}
        icon="email"
        mode="contained"
        onPress={() => console.log('Pressed')}
      >
        Press me
      </Button>

      <Text className="text-light-text dark:text-dark-text">Check</Text>
      <Checkbox.Item
        disabled
        label="Item"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />

      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color={primaryColor}
      />
    </View>
  );
};

export default HomeScreen;
