import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';

/**
 * Service for detecting the current platform (native iOS/Android vs web)
 * and providing access to native Capacitor plugins via the bridge.
 */
@Injectable({ providedIn: 'root' })
export class MobilePlatformService {
  /** true when running inside a native Android or iOS app */
  readonly isNative: boolean = Capacitor.isNativePlatform();

  /** 'ios' | 'android' | 'web' */
  readonly platform: string = Capacitor.getPlatform();

  readonly isIos: boolean = this.platform === 'ios';
  readonly isAndroid: boolean = this.platform === 'android';
  readonly isWeb: boolean = this.platform === 'web';

  /**
   * Direct access to the Capacitor native bridge plugins.
   * These are auto-registered by the native runtime when running on device;
   * the npm packages (@capacitor/status-bar etc.) add TypeScript typings only.
   */
  private get nativePlugins(): Record<string, any> {
    return (window as any)?.Capacitor?.Plugins ?? {};
  }

  async initializeApp(): Promise<void> {
    if (!this.isNative) return;

    await this.initStatusBar();
    await this.initSplashScreen();
    await this.setupKeyboard();
    await this.setupBackButton();
  }

  private async initStatusBar(): Promise<void> {
    try {
      const { StatusBar, Style } = this.nativePlugins;
      if (!StatusBar) return;
      await StatusBar.setStyle({ style: 'Dark' });
      if (this.isAndroid) {
        await StatusBar.setBackgroundColor({ color: '#061d4a' });
        await StatusBar.setOverlaysWebView({ overlay: false });
      }
    } catch (e) {
      console.debug('[MobilePlatform] StatusBar plugin not available:', e);
    }
  }

  private async initSplashScreen(): Promise<void> {
    try {
      const { SplashScreen } = this.nativePlugins;
      if (!SplashScreen) return;
      await SplashScreen.hide({ fadeOutDuration: 300 });
    } catch (e) {
      console.debug('[MobilePlatform] SplashScreen plugin not available:', e);
    }
  }

  private async setupKeyboard(): Promise<void> {
    try {
      const { Keyboard } = this.nativePlugins;
      if (!Keyboard) return;
      await Keyboard.setAccessoryBarVisible({ isVisible: true });
    } catch (e) {
      console.debug('[MobilePlatform] Keyboard plugin not available:', e);
    }
  }

  private async setupBackButton(): Promise<void> {
    try {
      const { App } = this.nativePlugins;
      if (!App) return;
      App.addListener('backButton', ({ canGoBack }: { canGoBack: boolean }) => {
        if (!canGoBack) {
          App.exitApp();
        } else {
          window.history.back();
        }
      });
    } catch (e) {
      console.debug('[MobilePlatform] App plugin not available:', e);
    }
  }

  async triggerHaptic(type: 'light' | 'medium' | 'heavy' = 'light'): Promise<void> {
    if (!this.isNative) return;
    try {
      const { Haptics, ImpactStyle } = this.nativePlugins;
      if (!Haptics) return;
      await Haptics.impact({ style: type });
    } catch (e) { /* graceful */ }
  }
}

