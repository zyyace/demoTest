package com.demotest.extend.component;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import java.util.Map;

import javax.annotation.Nullable;

public class TestViewManager extends SimpleViewManager<TestView> {
    static final String REACT_CLASS = "TestView";

    private static final int COMMAND_Click = 4;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected TestView createViewInstance(ThemedReactContext reactContext) {
        TestView testView = new TestView(reactContext);
        return testView;
    }

    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of(
                "changeText", COMMAND_Click
        );
    }

    public void receiveCommand (TestView root, int commandId, @Nullable ReadableArray args) {
        switch (commandId) {
            case COMMAND_Click:
                root.changeText();
        }
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder().put(
                "nativeShowMessToJs",
                MapBuilder.of("phasedRegistrationNames",
                        MapBuilder.of("bubbled", "onNativeShowMessToJs"))
        ).build();
    }
}
