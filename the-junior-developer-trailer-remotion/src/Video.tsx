import {Composition} from 'remotion';
import {HelloWorld, Line, Title} from './HelloWorld';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Line"
				component={Line}
				durationInFrames={5}
				fps={5}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={5}
				fps={5}
				width={1920}
				height={1080}
			/>
		</>
	);
};
