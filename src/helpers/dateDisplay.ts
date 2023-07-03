import { format } from 'date-fns';
import sub from 'date-fns/sub';
import isAfter from 'date-fns/isAfter';

export const dateFormatter = (date: Date) => {
	const originalDate = new Date(date);

	return format(originalDate, 'yyyy/MM/dd');
};

export const isNewPost = (date: Date | undefined) => {
	// new post: in 3 days from today
	const recentDateRange = sub(new Date(), {
		days: 3,
	});

	if (date) {
		const isRecent = isAfter(new Date(date), recentDateRange);
		return isRecent;
	}

	return;
};
