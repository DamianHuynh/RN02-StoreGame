import {Platform} from 'react-native';

export const mapIP = games => {
  if (Platform.OS === 'android') {
    if (Array.isArray(games)) {
      return games.map(item => {
        const preview = item.preview.map(pItem =>
          pItem.replace('localhost', '10.0.2.2'),
        );
        return {
          ...item,
          preview,
          icon: item.icon.replace('localhost', '10.0.2.2'),
        };
      });
    }
    const preview = games.preview.map(pItem =>
      pItem.replace('localhost', '10.0.2.2'),
    );
    return {
      ...games,
      preview,
      icon: games.icon.replace('localhost', '10.0.2.2'),
    };
  }
  return games;
};
