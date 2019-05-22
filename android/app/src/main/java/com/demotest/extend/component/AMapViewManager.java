package com.demotest.extend.component;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class AMapViewManager extends SimpleViewManager<AMapView> {

    @Override
    public String getName() {
        return "RNTAMap";
    }

    @Override
    protected AMapView createViewInstance(ThemedReactContext reactContext) {
        AMapView view = new AMapView(reactContext);
        return null;
    }

}
