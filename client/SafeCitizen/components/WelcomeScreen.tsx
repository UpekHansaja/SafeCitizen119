import { PrimaryButton } from '@/components/PrimaryButton';
import { ShieldLogo } from '@/components/ShieldLogo';
import { WelcomeContent } from '@/components/WelcomeContent';
import { COLORS, WELCOME_CONTENT } from '@/constants/Welcome';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

interface WelcomeScreenProps {
    onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Logo Section */}
                <View style={styles.logoSection}>
                    <ShieldLogo size={240} />
                </View>

                {/* Content Section */}
                <View style={styles.contentSection}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['white', 'transparent']}
                        style={styles.background}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    />

                    <WelcomeContent />
                    {/* Button Section */}
                    <View style={styles.buttonSection}>
                        <PrimaryButton
                            title={WELCOME_CONTENT.buttonText}
                            onPress={onGetStarted}
                            style={styles.button}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
    },
    logoSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 40,
        minHeight: 320,
    },
    background: {
        position: 'absolute',
        borderRadius: 24,
        left: 0,
        right: 0,
        // top: 0,
        paddingVertical: "5%",
    },
    contentSection: {
        backgroundColor: 'transparent',
        borderRadius: 24,
        marginHorizontal: "5%",
        paddingVertical: "5%",
    },
    buttonSection: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },
    button: {
        marginHorizontal: 20,
    },
});
