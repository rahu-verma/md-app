import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
    width?: number;
    height?: number;
    color?: string;
};

const EmailIcon: React.FunctionComponent<Props> = ({
    width = 21,
    height = 20,
    color = '#6E51D0'
}: Props) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 21 20" fill="none">
            <Path
                d="M10.5 19.583a9.332 9.332 0 01-3.738-.754A9.68 9.68 0 013.72 16.78a9.678 9.678 0 01-2.049-3.043A9.332 9.332 0 01.917 10c0-1.326.251-2.572.754-3.737A9.678 9.678 0 013.72 3.22 9.678 9.678 0 016.762 1.17 9.332 9.332 0 0110.5.417c1.326 0 2.572.251 3.738.754A9.679 9.679 0 0117.28 3.22a9.677 9.677 0 012.049 3.043A9.332 9.332 0 0120.083 10v1.27c0 .894-.315 1.649-.946 2.264-.631.615-1.402.922-2.312.922-.575 0-1.118-.14-1.63-.419a2.849 2.849 0 01-1.173-1.186 3.789 3.789 0 01-1.558 1.21 4.991 4.991 0 01-1.964.395c-1.246 0-2.304-.431-3.175-1.293C6.455 12.3 6.02 11.245 6.02 10c0-1.246.435-2.308 1.305-3.186.871-.879 1.93-1.318 3.175-1.318 1.246 0 2.304.44 3.174 1.318.87.878 1.306 1.94 1.306 3.186v1.27c0 .495.18.91.54 1.246.359.335.794.503 1.305.503.495 0 .922-.168 1.282-.503.36-.336.539-.751.539-1.246V10c0-2.268-.79-4.193-2.372-5.774-1.581-1.581-3.506-2.372-5.774-2.372-2.268 0-4.193.79-5.774 2.372C3.145 5.807 2.354 7.732 2.354 10c0 2.268.79 4.193 2.372 5.774 1.581 1.581 3.506 2.372 5.774 2.372h5.127v1.437H10.5zm0-6.564c.847 0 1.565-.292 2.156-.875.591-.583.887-1.297.887-2.144 0-.862-.296-1.59-.887-2.18-.59-.591-1.31-.887-2.156-.887-.847 0-1.565.296-2.156.887-.591.59-.887 1.318-.887 2.18 0 .847.296 1.561.887 2.144.59.583 1.31.875 2.156.875z"
                fill={color}
            />
        </Svg>
    );
};

export default EmailIcon;
