import themes from './topics.json';
const Topic = (props) => {

  const { topic } = props;

  const selectedTopic = themes.find((theme) => theme.topic_name === topic);
  return (
    <div className='h-1/5 flex-row justify-center items-center'>
      <p className="text-4xl font-bold mt-10">{topic && selectedTopic.main_topic}</p>
      <p className="text-2xl mt-10">{topic && selectedTopic.desc}</p>
    </div>
  );
};

export default Topic;
