import React from 'react';
import './App.scss';
import VisibilitySensor from 'react-visibility-sensor';
import { FaUserCircle, FaRedditAlien } from 'react-icons/fa';
import { AiOutlineLoading, AiFillPicture, AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai';
import TopNav from './components/TopNav';
import store from './store';
import { useState as useHookState } from '@hookstate/core';
import { objCopy } from './utils';

export default () => {
	const imageObj = useHookState(store.imageObj);
	const size = useHookState(store.size);

	let publicUrl = process.env.PUBLIC_URL || '';
	// remove trailing slash if it exists
	if (publicUrl.endsWith('/')) {
		publicUrl = publicUrl.slice(0, -1);
	}

	let imgs = imageObj.get().map((img, index) => {
		const clicked = () => {
			const newImgObj = objCopy(imageObj.get());
			// find this image and set it to focused
			for (let i = 0; i < newImgObj.length; i++) {
				if (newImgObj[i].id === img.id) {
					newImgObj[i].isFocused = !newImgObj[i].isFocused;
					break;
				}
			}
			imageObj.set(newImgObj);
		}
		return (
			<>
				<div className="img-cont"
					key={`img-${index}`}
					style={{
						height: size.get(),
						width: size.get()
					}}
					onClick={clicked}
				>
					<img src={img.image} />
					<div className="info-bar">
						<a href={`https://www.reddit.com/user/${img.author}/`} target="_blank" title={img.author}><FaUserCircle /></a>
						<a href={img.post} target="_blank" title={img.title}><FaRedditAlien /></a>
						<a href={`${publicUrl}/user/${img.author}`} target="_blank" title="User images"><AiFillPicture /></a>
					</div>
				</div>
				{
					img.isFocused ?
						<div className="img-cont focused"
							key={`img-${index}_preview`}
							style={{
								height: 'auto',
								width: 'auto'
							}}
							onClick={clicked}
						>
							<img src={img.image} />
							<div className="info-bar">
								<a href={`https://www.reddit.com/user/${img.author}/`} target="_blank" title={img.author}><FaUserCircle /></a>
								<a href={img.post} target="_blank" title={img.title}><FaRedditAlien /></a>
								<a href={`${publicUrl}/user/${img.author}`} target="_blank" title="User images"><AiFillPicture /></a>
							</div>
						</div>
						:
						null

				}
			</>
		)
	});
	return (
		<>
			<TopNav store={store} />
			<div className="imgs" style={{ marginTop: 64 }}>
				{imgs}
				<VisibilitySensor onChange={(isVisible) => {
					store.loaderVisible = isVisible;
					if (isVisible) {
						console.log('fetching next')
						store.fetchNext()
					}
				}}>
					<div style={{
						height: 200,
						fontSize: 40,
						color: '#fff'
					}}>
						{store.isLoading ? <AiOutlineLoading className="icon-spin" /> : null}
					</div>
				</VisibilitySensor>
			</div>
			<div className="zoom-box">
				<div className="zoom-btn"
					onClick={() => {
						let newSize = size.get() * 1.1;
						if (newSize > 1000) {
							newSize = 1000;
						}
						store.size.set(newSize);
					}}
				><AiOutlineZoomIn /></div>
				<div className="zoom-btn"
					onClick={() => {
						let { size } = store;
						let newSize = size.get() * 0.9;
						if (newSize < 200) {
							newSize = 200;
						}
						store.size.set(newSize);
					}}
				><AiOutlineZoomOut /></div>
			</div>
		</>
	)
};
