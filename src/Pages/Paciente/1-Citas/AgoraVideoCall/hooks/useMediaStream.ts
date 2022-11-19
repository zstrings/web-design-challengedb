import { useState, useEffect, useMemo } from "react";

const useMediaStream = (client: any, filter?: (streamId: number) => boolean): any[] => {
  const [localStream, setLocalStream] = useState<any>(undefined);
  const [remoteStreamList, setRemoteStreamList] = useState<any[]>([]);

  useEffect(() => {
    let mounted = true;
    // add when subscribed
    const addRemote = (evt: any) => {
      if (!mounted) {
        return;
      }
      const { stream } = evt;
      setRemoteStreamList(streamList => [...streamList, stream]);
    };
    // remove stream
    const removeRemote = (evt: any) => {
      const { stream, uid } = evt;
      // when "peer-leave", stream is undefined
      const targetId = stream ? stream.getId() : uid;
      if (targetId) {
        const index = remoteStreamList.findIndex(item => item.getId() === targetId);
        if (index !== -1) {
          setRemoteStreamL