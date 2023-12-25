import "./HeadingSection.scss";

export default function HeadingSection() {
	return (
		<div className="landing-page__heading">
			<h1 className="landing-page__heading-item">금융과 투자의</h1>
			<h1 className="landing-page__heading-item">기초를 알려주는</h1>
			<h1 className="landing-page__heading-item" style={{color: "#00a968"}}>
				스토코디
			</h1>

			<p className="landing-page__heading-paragraph">
				<span>스토코디는 청년들에게 금융과 투자에 대한 기초를</span>
				<span>알려주는 교육 플랫폼입니다.</span>
			</p>

			<div className="landing-page__hero-text-container">
				<h1 className="landing-page__hero-text">
					<span>coordinate</span>
				</h1>
				<h1 className="landing-page__hero-text">
					<span>your </span>
					<span style={{color: "#00a968"}}>stock.</span>
				</h1>
			</div>

			<div className="landing-page__about-container">
				<h4 className="landing-page__about-title">about</h4>
				<p className="landing-page__about-item">
					<span>스토코디는 청년들에게 금융과 투자에 대한 기초를 알려주는 교육 플랫폼입니다.</span>
					<span>어렵게 느껴지는 금융지식과 투자용어를 쉽고 재밌게 알려주고 청년들에게</span>
					<span>금융과 투자에 대한 심리적 장벽을 낮춰 주는 것을 목표로 하고 있습니다</span>
				</p>
			</div>
		</div>
	);
}
