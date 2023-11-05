import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
    width?: number;
    height?: number;
    color?: string;
};

const EditProfile: React.FunctionComponent<Props> = ({
    width = 18,
    height = 18,
    color = '#fff'
}: Props) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
            <Path
                d="M7.93 8.806l3.516-3.515a2.307 2.307 0 113.263 3.263l-3.515 3.516a11.925 11.925 0 01-5.54 3.136l-.68.17a.289.289 0 01-.35-.35l.17-.68a11.924 11.924 0 013.137-5.54z"
                fill={color}
                fillOpacity={0.24}
            />
            <Path
                d="M11.446 5.291l.53.53-.53-.53zM7.93 8.806l.53.53-.53-.53zm6.778-.252l-.53-.53.53.53zm-3.515 3.516l-.53-.53.53.53zm-5.54 3.136l-.182-.728.182.728zm-.68.17l.183.727-.182-.727zm-.35-.35l.728.181-.728-.182zm.17-.68l.728.182-.728-.182zm6.121-9.585L7.4 8.276l1.06 1.06 3.516-3.514-1.06-1.061zm3.263 3.263l-3.515 3.515 1.061 1.06 3.515-3.514-1.06-1.06zm-8.706 6.454l-.68.17.365 1.455.68-.17-.365-1.455zm-.12.73l.17-.68-1.456-.364-.17.68 1.456.363zm-.56-.56a.461.461 0 01.56.56l-1.455-.365c-.19.761.499 1.45 1.26 1.26l-.364-1.455zm5.871-3.109a11.173 11.173 0 01-5.19 2.94l.363 1.455a12.674 12.674 0 005.888-3.334l-1.06-1.06zM7.4 8.276a12.674 12.674 0 00-3.334 5.888l1.456.364A11.174 11.174 0 018.46 9.337L7.4 8.277zm5.677-4.41c-.81 0-1.588.322-2.162.895l1.06 1.06a1.557 1.557 0 011.102-.456v-1.5zm1.558 3.057c0 .413-.165.809-.457 1.101l1.061 1.06a3.057 3.057 0 00.896-2.161h-1.5zm1.5 0a3.057 3.057 0 00-3.058-3.058v1.5c.86 0 1.558.698 1.558 1.558h1.5zM13.8 8.513c-.431.144-1.098-.052-1.68-.634-.582-.582-.778-1.249-.634-1.68l-1.423-.475c-.4 1.2.22 2.438.997 3.215.777.778 2.014 1.397 3.215.997L13.8 8.513z"
                fill={color}
            />
        </Svg>
    );
};

export default EditProfile;
