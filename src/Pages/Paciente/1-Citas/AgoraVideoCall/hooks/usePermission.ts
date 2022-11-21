import { useEffect, useState } from 'react';
import useMounted from './useMounted';
import AgoraRTC from '../utils/AgoraEnhancer';

const usePermission = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const isMounted = useMounted();

  // request media permissions
  useEffect(() => {
    const tempAudioStream = AgoraRTC.crea