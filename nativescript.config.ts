import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.dateday',
  appPath: 'app',
  appResourcesPath: '../../tools/assets/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    minSdkVersion: 24, // Android 7.0
    targetSdkVersion: 24,
    requiresUserPermission: false
  }
} as NativeScriptConfig;