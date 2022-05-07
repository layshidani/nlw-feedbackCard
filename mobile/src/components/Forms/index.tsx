import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

import { theme } from '../../theme';
import { styles } from './styles';

import { FeedbackType } from '../Widgets';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton ';
import { Button } from '../Button';
import { Copyright } from '../Copyright';

interface Props {
  feedbackType: FeedbackType;
}

export function Forms({ feedbackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot=""
          onTakeShot={() => {}}
          onRemoveShot={() => {}}
        />
        <Button isLoading={false} />
      </View>

      <Copyright />

    </View>
  );
}