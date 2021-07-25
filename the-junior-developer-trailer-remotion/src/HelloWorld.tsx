import {CSSProperties} from 'react';
import {
	interpolate,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

const COLOR_1 = '#FEF900';
const COLOR_2 = '#01FFFF';

export const HelloWorld: React.FC = () => {
	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			<div>
				<Sequence from={5} durationInFrames={Infinity}>
					<Line position="top" />
				</Sequence>
				<Sequence from={10} durationInFrames={Infinity}>
					<Line position="right" />
				</Sequence>
				<Sequence from={25} durationInFrames={Infinity}>
					<Line position="bottom" />
				</Sequence>
				<Sequence from={40} durationInFrames={Infinity}>
					<Line position="left" />
				</Sequence>
				<Sequence from={60} durationInFrames={Infinity}>
					<Title titleText="Crash Course: Remotion" type="Video-title" />
				</Sequence>
				<Sequence from={90} durationInFrames={Infinity}>
					<Title titleText="The Junior Developer" type="Channel-title" />
				</Sequence>
			</div>
		</div>
	);
};

export const Title: React.FC<{
	titleText: string;
	type: 'Video-title' | 'Channel-title';
}> = ({titleText = 'Hello world', type = 'Video-title'}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const text = titleText.split(' ').map((t) => ` ${t} `);
	const isChannelTitle = type === 'Channel-title';
	return (
		<h1
			style={{
				fontFamily: 'SF Pro Text, Helvetica, Arial',
				fontWeight: 'bold',
				fontSize: 100,
				textAlign: 'center',
				position: 'absolute',
				top: !isChannelTitle ? '250px' : '',
				bottom: isChannelTitle ? '150px' : '',
				width: '100%',
			}}
		>
			{text.map((t, i) => {
				return (
					<span
						key={t}
						style={{
							color: isChannelTitle ? COLOR_1 : 'white',
							marginLeft: 10,
							marginRight: 10,
							transform: `scale(${spring({
								fps: videoConfig.fps,
								frame: frame - i * 5,
								config: {
									damping: 100,
									stiffness: 200,
									mass: 0.5,
								},
							})})`,
							display: 'inline-block',
						}}
					>
						{t}
					</span>
				);
			})}
		</h1>
	);
};

export const Line: React.FC<{position: 'top' | 'bottom' | 'left' | 'right'}> =
	({position = 'top'}) => {
		const frame = useCurrentFrame();
		const opacity = interpolate(frame, [0, 15], [0, 1]);
		const GENERIC_WIDTH = '20px';
		const styles: CSSProperties = {
			position: 'absolute',
			background: COLOR_2,
			opacity,
		};

		if (position === 'top' || position === 'bottom') {
			styles.width = '100%';
			styles.height = GENERIC_WIDTH;
			if (position === 'bottom') {
				styles.bottom = 0;
			}
		}

		if (position === 'left' || position === 'right') {
			styles.height = '100%';
			styles.width = GENERIC_WIDTH;
			if (position === 'right') {
				styles.right = 0;
			}
		}

		return <div style={styles} />;
	};
