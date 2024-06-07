// const Feedback = () => {
//   goodBtn = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   neutralBtn = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   badBtn = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   const { good, neutral, bad } = this.state;
//   return (
//     <div>
//       <div>
//         <button onClick={this.goodBtn}>Good</button>
//         <button onClick={this.neutralBtn}>Neutral</button>
//         <button onClick={this.badBtn}>Bad</button>
//       </div>
//     </div>
//   );
// };

// export default Feedback;

const Feedback = ({ onFeedback }) => {
  return (
    <div>
      <button onClick={() => onFeedback('good')}>Good</button>
      <button onClick={() => onFeedback('neutral')}>Neutral</button>
      <button onClick={() => onFeedback('bad')}>Bad</button>
    </div>
  );
};

export default Feedback;
