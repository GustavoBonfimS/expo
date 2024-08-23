import type { WebViewProps } from 'react-native-webview';
export type JSONValue = boolean | number | string | null | JSONArray | JSONObject;
export interface JSONArray extends Array<JSONValue> {
}
export interface JSONObject {
    [key: string]: JSONValue | undefined;
}
export type BridgeMessage<TData extends JSONValue> = {
    type: string;
    data: TData;
};
export type MarshalPropValuePrimitiveType = number | string | boolean | null | undefined;
export type MarshalPropValueNativeAction = (...args: any[]) => any;
export type MarshalPropValueType = MarshalPropValuePrimitiveType | MarshalPropValuePrimitiveType[] | Record<string, MarshalPropValuePrimitiveType> | MarshalPropValueNativeAction;
export interface MarshalPropsType {
    [key: string]: MarshalPropValueType;
}
export { WebViewProps };
/**
 * The type of the `dom` prop for DOM components.
 * You can use this type from native components and pass props to the underlying WebView components.
 */
export interface DOMWebViewProps extends WebViewProps {
    /**
     * Whether to resize the native WebView size based on the DOM content size.
     * @default false
     */
    autoSize?: boolean;
}
/**
 * The public props for DOM components.
 */
export type DOMProps<T extends MarshalPropsType = MarshalPropsType> = {
    [K in keyof T]: T[K];
} & {
    /**
     * The props passing to the WebView component.
     * Inside the DOM component, the `dom` prop will be undefined.
     */
    dom?: DOMWebViewProps;
};
export type DOMPropsWithSource = DOMProps & {
    source: WebViewProps['source'];
};
//# sourceMappingURL=dom.types.d.ts.map