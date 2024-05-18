const App = () => {
  return (
    <div>
      <Tweet
        username="Bob"
        name="Bob Bob"
        date={new Date().toDateString()}
        message="Hello to the future"
      />
      <Tweet
        username="Bobo"
        name="Bobo Bob"
        date={new Date().toDateString()}
        message="Hello to the future"
      />
      <Tweet
        username="Bob"
        name="Bob Bob"
        date={new Date().toDateString()}
        message="Hello to the future"
      />
    </div>
  );
};
