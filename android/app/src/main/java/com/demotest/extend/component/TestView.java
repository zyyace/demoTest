package com.demotest.extend.component;

import android.content.Context;
import android.support.annotation.NonNull;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;

import com.demotest.R;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class TestView extends FrameLayout {
    private static final String TAG = "TestView";
    private Button testButton;

    public TestView(@NonNull Context context) {
        super(context);
        inflate(context, R.layout.test_view, this);
        testButton = findViewById(R.id.button1);
        initEventListen();
//        inflate(context)
    }

    public void initEventListen () {
        testButton.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                switch (v.getId()) {
                    case R.id.button1:
                        showMess();
                }
            }
        });
    }

    public void showMess() {
        WritableMap event = Arguments.createMap();
        event.putString("message", "MyMessage");
        ReactContext reactContext = (ReactContext)getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                getId(),
                "nativeShowMessToJs",
                event
        );
    }

    public void changeText () {
        String str1 = new String(String.valueOf(testButton.getText()));
        str1 = (str1.equals("JsChangeNativeText") ? "aceTest" : "JsChangeNativeText");
        testButton.setText(str1);
    }
}
