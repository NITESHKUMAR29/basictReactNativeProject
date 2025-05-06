import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Event } from '../types/puja';

const { width } = Dimensions.get('window');

interface PujaCardProps {
  value: Event; // Updated to match the Event type from the provided data
  idx: number;
  onPress: () => void;
}

const PujaCard: React.FC<PujaCardProps> = ({ value, idx, onPress }) => {
  const templeName = value?.Event_Config?.Temple?.name || value?.templeName;
  const templeCity = value?.Event_Config?.Temple?.city;
  const dateName = value?.Event_Config?.Timeline?.name;
  const eventDate = value?.Event_Config?.Timeline?.date;
  const mainBenefit = value?.mainBenefit || '';
  const participantCount = value?.participantCount || '0';
  const eventName = value?.name;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.card}>
      {/* Event Image */}
      <Image source={{ uri: value?.images[0] }} style={styles.image} />

      <View style={styles.content}>
        {/* Event Name */}
        <Text numberOfLines={2} style={styles.name}>
          {eventName}
        </Text>

        {/* Event Benefit */}
        {mainBenefit ? (
          <Text numberOfLines={2} style={styles.benefit}>
            {mainBenefit}
          </Text>
        ) : null}

        <View style={styles.infoContainer}>
          {/* Temple Information */}
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

          {/* Event Date and Timeline */}
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

      {/* Footer: Participant Count and Book Button */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {participantCount}+ Booked
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
    color: '#1A2B3C',
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
