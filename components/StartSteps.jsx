import styles from '../styles';

const StartSteps = ({ number, text }) => (
  // step wrapper div
  <div className={`${styles.flexCenter} flex-row`}>
    {/* step number wrapper div */}
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      {/* the actual step number */}
      <p className="font-bold text-[20px] text-white">{number}</p>

      {/* the step text wrapper div */}
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
