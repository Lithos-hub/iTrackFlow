type FeedbackType = 'error' | 'warning' | 'info' | 'success';

export interface BaseFeedbackProps {
	type: FeedbackType;
	message: string;
}
