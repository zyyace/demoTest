package com.demotest.extend.component;

import android.content.Context;
import android.content.Loader;
import android.view.View;

import com.amap.api.location.AMapLocation;
import com.amap.api.location.AMapLocationClient;
import com.amap.api.location.AMapLocationClientOption;
import com.amap.api.location.AMapLocationListener;
import com.amap.api.maps.AMap;
import com.amap.api.maps.LocationSource;
import com.amap.api.maps.MapView;
import com.amap.api.maps.UiSettings;
import com.amap.api.maps.model.AMapCameraInfo;
import com.amap.api.maps.model.CameraPosition;
import com.amap.api.maps.model.LatLng;
import com.amap.api.maps.model.Marker;
import com.facebook.react.uimanager.ThemedReactContext;

public class AMapView extends MapView implements LocationSource, AMapLocationListener, AMap.InfoWindowAdapter, AMap.OnCameraChangeListener{
    private ThemedReactContext mContext;
    private OnLocationChangedListener mListener;
    private AMapLocationClient mapLocationClient;
    private AMapLocationClientOption mapLocationClientOption;
    private AMap mAmap;
    private UiSettings mUiSettings;
    private AMapLocation aMapLocation;
    private LatLng defaultLatlon = new LatLng(22.281336, 114.141169);

    private static final float DEFAULT_ZOOMLEVEL = 16;

    public AMapView(Context context) {
        super(context);
        mContext = (ThemedReactContext) context;
    }

    private void init() {
        mAmap = getMap();
        mUiSettings = mAmap.getUiSettings();

        mAmap.setOnCameraChangeListener(this);
        mAmap.setInfoWindowAdapter(this);
        mAmap.setLocationSource(this);
        mAmap.setMyLocationEnabled(true);
    }

    @Override
    public void activate(OnLocationChangedListener onLocationChangedListener) {
        mListener = onLocationChangedListener;
        if(mapLocationClient == null) {
//            初始化定位
            mapLocationClient = new AMapLocationClient(mContext);
//            初始化定位参数
            mapLocationClientOption = new AMapLocationClientOption();
//            设置定位回调监听
            mapLocationClient.setLocationListener(this);
//            设置为高精度定位模式
            mapLocationClientOption.setLocationMode(AMapLocationClientOption.AMapLocationMode.Hight_Accuracy);
            mapLocationClientOption.setOnceLocation(true);
//            设置定位参数
            mapLocationClient.setLocationOption(mapLocationClientOption);

//            启动定位
            mapLocationClient.startLocation();

        }
    }

    @Override
    public void deactivate() {

    }

    @Override
    public void onLocationChanged(AMapLocation aMapLocation) {

    }

    @Override
    public View getInfoWindow(Marker marker) {
        return null;
    }

    @Override
    public View getInfoContents(Marker marker) {
        return null;
    }

    @Override
    public void onCameraChange(CameraPosition cameraPosition) {

    }

    @Override
    public void onCameraChangeFinish(CameraPosition cameraPosition) {

    }
}
