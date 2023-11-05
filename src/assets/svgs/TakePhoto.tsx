import React, { FunctionComponent } from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '@/theme/colors';

type Props = {
    width?: number;
    height?: number;
    color?: string;
};

const TakePhoto: FunctionComponent<Props> = ({
    width = 24,
    height = 24,
    color = Colors.theme.primary
}: Props) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path
                d="M4.71809 17.2014L6.45698 15.4625C8.08199 13.8375 10.7166 13.8375 12.3417 15.4625L14.0805 17.2014M14.0805 17.2014L14.7849 16.497C16.0825 15.1994 18.2143 15.2961 19.3891 16.7059L19.802 17.2014M14.0805 17.2014L16.6812 19.802M3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496Z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};

export default TakePhoto;
