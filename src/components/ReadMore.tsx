import { useState } from 'react';

interface ReadMoreProps {
	text: string;
	amountOfWords?: number;
	className?: string;
}

export const ReadMore = ({ className, text, amountOfWords = 36 }: ReadMoreProps) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const splittedText = text.split(' ');
	const itCanOverflow = splittedText.length > amountOfWords;
	const beginText = itCanOverflow ? splittedText.slice(0, amountOfWords - 1).join(' ') : text;
	const endText = splittedText.slice(amountOfWords - 1).join(' ');

	return (
		<p className={`${className}`}>
			{beginText}
			{itCanOverflow && <>{!isExpanded && <span>... </span>}</>}
		</p>
	);
};
