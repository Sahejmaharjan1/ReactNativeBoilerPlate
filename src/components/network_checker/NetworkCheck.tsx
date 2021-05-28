import React, {useEffect, useState} from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
type NetworkHOCProps = {
  children: React.ReactElement;
};

export function NetworkHOC({children}: NetworkHOCProps) {
  const [network, setNetwork] = useState<boolean | null>(null);
  //check if there is internet connection throughOut the whole app
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      //api calls should not be done inside netInfo event Listner because each platform runs NetInfo differently
      //NetInfo runs twice in ios whereas runs once in Android
      setNetwork(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (network) {
      // hit the required api when user opened the app without internet connection but should be hit.
    }
  }, [network]);

  return children;
}
