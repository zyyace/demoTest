package com.demotest;

import android.app.Application;

import com.demotest.extend.packager.AMapViewPackage;
import com.demotest.extend.packager.TestViewPackage;
import com.facebook.react.ReactApplication;
import com.RNFetchBlob.RNFetchBlobPackage;
import fr.greweb.reactnativeviewshot.RNViewShotPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.beefe.picker.PickerViewPackage;
import me.listenzz.modal.TranslucentModalReactPackage;
import com.reactcommunity.rnlanguages.RNLanguagesPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.rnfs.RNFSPackage;
import com.dylanvann.fastimage.FastImageViewPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFetchBlobPackage(),
            new RNViewShotPackage(),
            new SplashScreenReactPackage(),
            new PickerViewPackage(),
            new TranslucentModalReactPackage(),
            new RNLanguagesPackage(),
            new PickerPackage(),
            new RNFSPackage(),
            new FastImageViewPackage(),
              new AMapViewPackage(),
              new TestViewPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
