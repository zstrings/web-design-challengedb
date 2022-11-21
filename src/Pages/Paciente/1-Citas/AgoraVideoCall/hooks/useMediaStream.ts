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
          setRemoteStreamList(streamList => {
            streamList.splice(index, 1);
            // a new reference in order to re-render
            return [...streamList];
          });
        }
      }
    };
    // subscribe when added
    const doSub = (evt: any) => {
      if (!mounted) {
        return;
      }
      if (filter) {
        if (filter(evt.stream.getId())) {
          client.subscribe(evt.stream);
        }
      } else {
        client.subscribe(evt.stream);
      }
    };
    // add when published
    const addLocal = (evt: any) => {
      if (!mounted) {
        return;
      }
      const { stream } = evt;
      const stop = stream.stop;
      const close = stream.close;
      stream.close = (func => () => {
        func()     
        setLocalStream(undefined);   
      })(close);
      stream.stop = (func => () => {
        func()     
        setLocalStream(undefined);   
      })(stop