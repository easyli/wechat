package com.runnercampshop;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by zhanghuan on 2016/9/18.
 */
public class MyNativeModule extends ReactContextBaseJavaModule {

    private Context mContext;

    public MyNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
    }

    @Override
    public String getName() {
        String clazz = this.getClass().getName();
        return "MyNativeModule";
    }

    // 函数不能有返回值，因为被调用的原生代码是异步的， 原生代码执行结束以后只能通过回调函数或者发送消息给rn模块

    @ReactMethod
    public void rnCallNative(String msg) {
        Toast.makeText(mContext, msg, Toast.LENGTH_SHORT).show();
    }
}
