import React from 'react'
import facebook from '../../assets/img/footer/facebook.png'
import instagram from '../../assets/img/footer/instagram.png'
import tiktok from '../../assets/img/footer/tiktok.png'
import youtube from '../../assets/img/footer/youtube.png'

const Social = () => {
	return (
		<div className='footer-content__right-social'>
			<h6>Follows us On</h6>
			<ul>
				<li>
					<button>
						<img src={facebook} alt='img' />
					</button>
				</li>
				<li>
					<button>
						<img src={instagram} alt='img' />
					</button>
				</li>
				<li>
					<button>
						<img src={tiktok} alt='img' />
					</button>
				</li>
				<li>
					<button>
						<img src={youtube} alt='img' />
					</button>
				</li>
			</ul>
		</div>
	)
}

export default Social
