import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

interface PujaCardProps {
  value: any;
  idx: number;
  onPress: () => void;
}

const PujaCard: React.FC<PujaCardProps> = ({ value, idx, onPress }) => {
  const templeName = value?.Event_Config?.Temple?.name || value?.templeName;
  const templeCity = value?.Event_Config?.Temple?.city;
  const dateName = value?.Event_Config?.Timeline?.name;
  const eventDate = value?.Event_Config?.Timeline?.date;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.card}>
      <Image source={{ uri: value?.images[0] }} style={styles.image} />

      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.name}>
          {value?.name}
        </Text>

        {value?.mainBenefit ? (
          <Text numberOfLines={2} style={styles.benefit}>
            {value?.mainBenefit}
          </Text>
        ) : null}

        <View style={styles.infoContainer}>
          <View style={styles.iconTextRow}>
            <Image
              source={require('../assets/temple.png')}
              style={styles.icon}
            />
            <Text numberOfLines={1} style={styles.infoText}>
              {templeName}
              {templeCity ? `, ${templeCity}` : ''}
            </Text>
          </View>

          <View style={styles.iconTextRow}>
            <Image
              source={require('../assets/calendar.png')}
              style={styles.icon}
            />
            <Text numberOfLines={1} style={styles.infoText}>
              {new Date(eventDate).toDateString()} - {dateName}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {value?.participantCount}+ Booked
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Book Puja</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    width: width * 0.9,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '1A2B3C',
  },
  benefit: {
    fontSize: 14,
    fontWeight: '600',
    backgroundColor: 'transparent',
    color: '#C20863',
  },
  infoContainer: {
    marginTop: 10,
    gap: 8,
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#6F7D83',
    flex: 1,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
  },
  button: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PujaCard;
