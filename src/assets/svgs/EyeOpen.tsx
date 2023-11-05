import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '@/theme/colors';

type Props = {
    width?: number;
    height?: number;
    colorProp?: string;
};

const EyeOpenIcon: FunctionComponent<Props> = ({
    width = 24,
    height = 24,
    colorProp = Colors.theme.primary
}: Props) => {
    return (
        <Svg
            width={width}
            height={height}
            style={style.root}
            viewBox="0 0 24 24"
            fill="none"
        >
            <Path
                d="M3.90691 15.3487C2.69705 13.2818 2.69705 10.7182 3.90691 8.65133C6.85824 3.60935 13.309 2.66645 17.5692 5.82263L17.8268 6.08022L14.4839 9.47616L9.46212 14.5777L6.12452 17.9682L5.96786 17.8116C5.17765 17.1436 4.47699 16.3226 3.90691 15.3487Z"
                fill={colorProp}
                fillOpacity="0.24"
            />
            <Path
                d="M20.7394 8.27246C20.5301 7.91498 20.0707 7.79482 19.7132 8.00407C19.3558 8.21332 19.2356 8.67274 19.4448 9.03021L20.7394 8.27246ZM20.0921 15.3487L19.4448 14.9698L20.0921 15.3487ZM9.16415 18.7776C8.77249 18.6427 8.3457 18.851 8.21089 19.2426C8.07608 19.6343 8.2843 20.0611 8.67596 20.1959L9.16415 18.7776ZM3.90691 15.3487L4.55418 14.9698L3.90691 15.3487ZM3.90691 8.65133L4.55418 9.03021L3.90691 8.65133ZM5.96786 17.8116L6.49819 17.2813L6.47601 17.2591L6.45206 17.2388L5.96786 17.8116ZM17.5692 5.82263L18.0995 5.2923L18.0603 5.25304L18.0157 5.22L17.5692 5.82263ZM14.4333 9.42557L14.9637 8.89524C14.9595 8.89105 14.9552 8.88691 14.9509 8.88282L14.4333 9.42557ZM9.31281 14.4284L8.74271 14.9157C8.7554 14.9305 8.76867 14.9449 8.78248 14.9587L9.31281 14.4284ZM16.3062 12.0607C16.3062 11.6465 15.9704 11.3107 15.5562 11.3107C15.142 11.3107 14.8062 11.6465 14.8062 12.0607H16.3062ZM11.999 14.9233C11.5847 14.9233 11.249 15.2591 11.249 15.6733C11.249 16.0875 11.5847 16.4233 11.999 16.4233V14.9233ZM4.15252 18.9024C3.86194 19.1976 3.86568 19.6725 4.16087 19.9631C4.45606 20.2536 4.93092 20.2499 5.2215 19.9547L4.15252 18.9024ZM20.409 4.52614C20.6996 4.23095 20.6958 3.75609 20.4007 3.46551C20.1055 3.17493 19.6306 3.17867 19.34 3.47386L20.409 4.52614ZM17.8268 6.08022L18.3613 6.60635L17.8268 6.08022ZM19.4448 9.03021C20.5177 10.8631 20.5177 13.1369 19.4448 14.9698L20.7394 15.7275C22.0862 13.4266 22.0862 10.5734 20.7394 8.27246L19.4448 9.03021ZM19.4448 14.9698C17.2212 18.7686 12.8399 20.0427 9.16415 18.7776L8.67596 20.1959C12.9739 21.6752 18.1269 20.1907 20.7394 15.7275L19.4448 14.9698ZM4.55418 14.9698C3.48129 13.1369 3.48129 10.8631 4.55418 9.03021L3.25965 8.27246C1.9128 10.5734 1.9128 13.4266 3.25965 15.7275L4.55418 14.9698ZM6.45206 17.2388C5.72685 16.6258 5.08133 15.8704 4.55418 14.9698L3.25965 15.7275C3.87266 16.7748 4.62844 17.6614 5.48366 18.3843L6.45206 17.2388ZM4.55418 9.03021C7.26775 4.3944 13.2012 3.51996 17.1227 6.42527L18.0157 5.22C13.4168 1.81293 6.44873 2.8243 3.25965 8.27246L4.55418 9.03021ZM9.19283 12.0607C9.19283 10.467 10.4602 9.19699 11.999 9.19699V7.69699C9.60924 7.69699 7.69283 9.66125 7.69283 12.0607H9.19283ZM11.999 9.19699C12.7388 9.19699 13.4121 9.48802 13.9157 9.96831L14.9509 8.88282C14.1818 8.14925 13.1424 7.69699 11.999 7.69699V9.19699ZM9.88291 13.941C9.45353 13.4387 9.19283 12.7825 9.19283 12.0607H7.69283C7.69283 13.1505 8.08816 14.15 8.74271 14.9157L9.88291 13.941ZM14.8062 12.0607C14.8062 13.6528 13.5382 14.9233 11.999 14.9233V16.4233C14.3882 16.4233 16.3062 14.4595 16.3062 12.0607H14.8062ZM5.59003 17.4421L4.15252 18.9024L5.2215 19.9547L6.65901 18.4944L5.59003 17.4421ZM5.43753 18.3419L5.59419 18.4986L6.65485 17.4379L6.49819 17.2813L5.43753 18.3419ZM8.92763 14.0515L5.59003 17.4421L6.65901 18.4944L9.99661 15.1038L8.92763 14.0515ZM8.78248 14.9587L8.93179 15.108L9.99245 14.0473L9.84314 13.898L8.78248 14.9587ZM13.9494 8.95002L8.92763 14.0515L9.99661 15.1038L15.0184 10.0023L13.9494 8.95002ZM13.903 9.9559L13.9536 10.0065L15.0142 8.94583L14.9637 8.89524L13.903 9.9559ZM19.34 3.47386L17.2923 5.55408L18.3613 6.60635L20.409 4.52614L19.34 3.47386ZM17.2923 5.55408L13.9494 8.95002L15.0184 10.0023L18.3613 6.60635L17.2923 5.55408ZM17.0389 6.35296L17.2965 6.61055L18.3571 5.54989L18.0995 5.2923L17.0389 6.35296Z"
                fill={colorProp}
            />
        </Svg>
    );
};

const style = StyleSheet.create({
    root: {
        width: 'auto',
        height: 'auto'
    }
});

export default EyeOpenIcon;