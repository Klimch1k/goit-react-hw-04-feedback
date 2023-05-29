
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import { useState } from 'react';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    switch (e) {
      case 'good':
        setGood(prevstate => prevstate + 1);
        break;
      case 'neutral':
        setNeutral(prevstate => prevstate + 1);
        break;
      case 'bad':
        setBad(prevstate => prevstate + 1);
        break;

      default:
        return;
    }
  };
  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPercentage = () => {
    return totalFeedback() === 0
      ? 0
      : Math.round((good / totalFeedback()) * 100);
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={[
            { feedback: 'good', variant: 'success' },
            { feedback: 'neutral', variant: 'secondary' },
            { feedback: 'bad', variant: 'danger' },
          ]}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        ) : (
          <Notification notification={'There is no feedback'}></Notification>
        )}
      </Section>
    </div>
  );
};

export default Feedback;
