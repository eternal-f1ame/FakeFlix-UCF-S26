/**
 * @file PlayAnimation.jsx
 * @description Renders the FakeFlix splash screen with an accompanying
 * startup sound before redirecting the user to the main browse view.
 */

import "./playAnimation.scss"
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { TADUM_SOUND_URL } from "../../requests";

/**
 * PlayAnimation - Splash screen component that plays the startup sound
 * and redirects to the browse page after 4.2 seconds.
 */
const PlayAnimation = () => {

	let history = useHistory();
	const soundRef = useRef(null);

	/** Resets and plays the startup sound effect. */
	const handleTadum = () => {
		soundRef.current.currentTime = 0;
		soundRef.current.play();
	}

	/** Plays sound on mount and navigates to /browse after the animation completes. */
	useEffect(() => {
		handleTadum();
		setTimeout(() => {
			history.push('/browse')
		}, 4200)
	}, [history])

	return (
		<div className='PlayAnimation__wrp'>
			<audio ref={soundRef} src={TADUM_SOUND_URL} />
			<span className="PlayAnimation__text">
				FAKEFLIX
			</span>
		</div>
	)
}

export default PlayAnimation
