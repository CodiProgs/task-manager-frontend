import bg from '/public/background.png'
import headline from '/public/headline.png'
import phone from '/public/phone.png'
import trends from '/public/trends.jpg'
import cn from 'clsx'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/form-elements/button/Button'

import { PUBLIC_URL } from '@/config/url.config'

import styles from './home.module.scss'

export default function Home() {
	return (
		<div className={styles.home}>
			<section className={styles.main}>
				<div className={styles.background}>
					<Image
						src={bg}
						alt='background'
					/>
				</div>
				<div className={styles.content}>
					<div>
						<h1>
							Organise projects. <br />
							Get more done.
						</h1>
						<Button>
							<Link href={PUBLIC_URL.AUTH}>Get Started</Link>
						</Button>
					</div>
					<div className={styles.image}>
						<Image
							src={phone}
							alt='phone'
							objectFit='contain'
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						/>
					</div>
				</div>
				<Link
					href={
						'https://www.figma.com/design/RmFZYNamgJiSTiGApXYMnm/Landify?node-id=2-31&t=ITORsvaPfZCkvtIB-0'
					}
					className={styles.link}
				>
					View full design in Figma
				</Link>
			</section>
			<section className={styles.companies}>
				<div className={styles.divider} />
				<div className={styles.content}>
					<div className={styles.item}>
						<Image
							src={'/logos/airbnb.svg'}
							alt='airbnb'
							fill
						/>
					</div>
					<div className={styles.item}>
						<Image
							src={'/logos/hubspot.svg'}
							alt='amazon'
							fill
						/>
					</div>
					<div className={styles.item}>
						<Image
							src={'/logos/google.svg'}
							alt='amazon'
							fill
						/>
					</div>
					<div className={styles.item}>
						<Image
							src={'/logos/microsoft.svg'}
							alt='amazon'
							fill
						/>
					</div>
					<div className={styles.item}>
						{' '}
						<Image
							src={'/logos/walmart.svg'}
							alt='amazon'
							fill
						/>
					</div>
					<div className={styles.item}>
						<Image
							src={'/logos/fedex.svg'}
							alt='amazon'
							fill
						/>
					</div>
				</div>
				<div className={styles.divider} />
			</section>
			<section className={styles.features}>
				<div className={styles.text}>
					<h2>Tailor-made features</h2>
					<p className={styles.description}>
						Lorem ipsum is common placeholder text used to demonstrate the
						graphic elements of a document or visual presentation.
					</p>
				</div>
				<div className={styles.content}>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Image
								src={'/features/01.svg'}
								alt='icon'
								fill
							/>
						</div>
						<div>
							<h3>Robust workflow</h3>
							<p className={styles.description}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								erat nibh tristique ipsum.
							</p>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Image
								src={'/features/02.svg'}
								alt='icon'
								fill
							/>
						</div>
						<div>
							<h3>Flexibility</h3>
							<p className={styles.description}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								erat nibh tristique ipsum.
							</p>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Image
								src={'/features/03.svg'}
								alt='icon'
								fill
							/>
						</div>
						<div>
							<h3>User friendly</h3>
							<p className={styles.description}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								erat nibh tristique ipsum.
							</p>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Image
								src={'/features/04.svg'}
								alt='icon'
								fill
							/>
						</div>
						<div>
							<h3>Multiple layouts</h3>
							<p className={styles.description}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								erat nibh tristique ipsum.
							</p>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Image
								src={'/features/05.svg'}
								alt='icon'
								fill
							/>
						</div>
						<div>
							<h3>Better components</h3>
							<p className={styles.description}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								erat nibh tristique ipsum.
							</p>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Image
								src={'/features/06.svg'}
								alt='icon'
								fill
							/>
						</div>
						<div>
							<h3>Well organised</h3>
							<p className={styles.description}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								erat nibh tristique ipsum.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className={cn(styles.achievements, styles.grid_custom)}>
				<div>
					<h2>Our 18 years of achievements</h2>
					<p className={styles.description}>
						With our super powers we have reached this
					</p>
				</div>
				<div className={cn(styles.content, styles.grid_custom)}>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Image
								src={'/achievements/01.svg'}
								alt='icon'
								fill
							/>
						</div>
						<div>
							<h3>10,000+</h3>
							<p>Downloads per day</p>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Image
								src={'/achievements/02.svg'}
								alt='icon'
								fill
							/>
						</div>
						<div>
							<h3>2 Million</h3>
							<p>Users</p>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Image
								src={'/achievements/03.svg'}
								alt='icon'
								fill
							/>
						</div>
						<div>
							<h3>500+</h3>
							<p>Clients</p>
						</div>
					</div>
					<div className={styles.item}>
						<div className={styles.icon}>
							<Image
								src={'/achievements/04.svg'}
								alt='icon'
								fill
							/>
						</div>
						<div>
							<h3>140</h3>
							<p>Countries</p>
						</div>
					</div>
				</div>
			</section>
			<section className={cn(styles.headline, styles.grid_custom)}>
				<div className={styles.image}>
					<Image
						src={headline}
						alt='headline'
						objectFit='contain'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
				<div className={styles.text}>
					<div className={styles.heading}>Headline</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum
						diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem
						egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non.
						Non commodo volutpat, pharetra, vel.
					</p>
					<Link
						href={PUBLIC_URL.AUTH}
						className={cn(styles.link, 'group')}
					>
						Get started
						<MoveRight className='group-hover:opacity-100 group-hover:translate-x-0 transition-transform opacity-0 transform -translate-x-2' />
					</Link>
				</div>
			</section>
			<section className={styles.trends}>
				<div className={cn(styles.text, styles.grid_custom)}>
					<div className={styles.heading}>
						Enter the world of all fashion trends
					</div>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
						scelerisque at quam congue posuere libero in sit quam. Consequat,
						scelerisque non tincidunt sit lectus senectus.
					</p>
				</div>
				<div className={styles.image}>
					<Image
						src={trends}
						alt='trends'
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>
			</section>
		</div>
	)
}
