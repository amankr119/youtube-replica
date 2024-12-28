import { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

const useVoice = (setSearchQuery) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setSearchQuery(transcript);
    }
  }, [transcript, setSearchQuery]);

  const startListening = () => {
    if (SpeechRecognition.startListening) {
      SpeechRecognition.startListening({ continuous: true });
    } else {
      console.error("SpeechRecognition.startListening is not defined.");
    }
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
  };

  return {
    transcript,
    listening,
    startListening,
    stopListening,
    browserSupportsSpeechRecognition
  };
};

export default useVoice;
