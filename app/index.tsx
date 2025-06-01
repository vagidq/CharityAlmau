import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Swiper from 'react-native-swiper';

export default function Index() {
  const [showOnboarding, setShowOnboarding] = useState<boolean>(true);

  const completeOnboarding = () => {
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return (
      <Swiper
        style={styles.wrapper}
        dotColor="#DDD"
        activeDotColor="#FF6347"
        showsButtons={false}
      >
        <View style={styles.slide}>
          <Image 
            source={require('./assets/exchange.png')} 
            style={styles.image} 
          />
          <Text style={styles.title}>Обменивайся</Text>
          <Text style={styles.text}>Находи нужные вещи и предлагай свои в обмен</Text>
        </View>

        <View style={styles.slide}>
          <Image 
            source={require('./assets/give.png')} 
            style={styles.image} 
          />
          <Text style={styles.title}>Отдавай</Text>
          <Text style={styles.text}>Отдавай ненужные вещи тем, кому они пригодятся</Text>
        </View>

        <View style={styles.slide}>
          <Image 
            source={require('./assets/community.png')} 
            style={styles.image} 
          />
          <Text style={styles.title}>Поддерживай студентов</Text>
          <Text style={styles.text}>Стань частью сообщества взаимопомощи</Text>
          <TouchableOpacity 
            style={styles.button}
            onPress={completeOnboarding}
          >
            <Text style={styles.buttonText}>Начать</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Основной экран приложения</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 30,
    color: '#666',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});