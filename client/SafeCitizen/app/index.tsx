import { WelcomeScreen } from '@/components/WelcomeScreen';
import { router } from 'expo-router';
import React from 'react';

export default function Index() {
  const handleGetStarted = () => {
    // Navigate to the main dashboard
    router.push('/(tabs)');
  };

  return (
    <WelcomeScreen onGetStarted={handleGetStarted} />
  );
}
