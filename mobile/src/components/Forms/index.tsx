import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { captureScreen } from "react-native-view-shot";
import FileSystem from "expo-file-system";

import { theme } from '../../theme';
import { styles } from './styles';

import { FeedbackType } from '../Widgets';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton ';
import { Button } from '../Button';
import { Copyright } from '../Copyright';
import { api } from '../../libs/api';

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Forms({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>('');
  const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(
    false
  );
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => setScreenshot(uri))
      .catch((error) =>
        console.log("Ocorreu um erro ao capturar a imagem", error)
      );
  }

  function handleRemoveScreenshot() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if (isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, {encoding: 'base64'});

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      });

      onFeedbackSent();
    } catch (error) {
      console.log('Ocorreu um erro: ', error);
      setIsSendingFeedback(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
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
        autoCorrect={false}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeShot={handleScreenshot}
          onRemoveShot={handleRemoveScreenshot}
        />
        <Button isLoading={isSendingFeedback} onPress={handleSendFeedback} />
      </View>

      <Copyright />
    </View>
  );
}