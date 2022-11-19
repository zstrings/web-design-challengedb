import { useState, useEffect } from 'react';
import AgoraRTC from '../utils/AgoraEnhancer';
import { IClientWithPromise } from 'agoran-awe/types/promisify';

const fakeClient = AgoraRTC.createClient({
  mode: 'live',