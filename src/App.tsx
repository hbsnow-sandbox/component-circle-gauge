import { Circle } from "./components/Circle";
import { CirrcleDashArray } from "./components/CirrcleDashArray";
import { useCount } from "./hooks/useCount";
import styles from "./index.module.css";

export const App = (): JSX.Element => {
  const [r, { countUp: countUpR, countDown: countDownR }] = useCount(50);
  const [
    strokeWidth,
    { countUp: countUpStrokeWidth, countDown: countDownStrokeWidth },
  ] = useCount(10);
  const [value, { countUp: countUpValue, countDown: countDownValue }] =
    useCount(76);

  return (
    <main>
      <div className={styles.buttons}>
        <div>
          <button onClick={() => countUpR()}>countUpR</button>
        </div>
        <div>
          <button onClick={() => countDownR()}>countDownR</button>
        </div>
      </div>

      <div className={styles.buttons}>
        <div>
          <button onClick={() => countUpStrokeWidth()}>
            countUpStrokeWidth
          </button>
        </div>
        <div>
          <button onClick={() => countDownStrokeWidth()}>
            countDownStrokeWidth
          </button>
        </div>
      </div>

      <div className={styles.buttons}>
        <div>
          <button onClick={() => countUpValue()}>countUpValue</button>
        </div>
        <div>
          <button onClick={() => countDownValue()}>countDownValue</button>
        </div>
      </div>

      <p>
        r: {r} / strokeWidth: {strokeWidth} / value: {value}
      </p>

      <div className={styles.circles}>
        <div>
          <div className={styles.circleTitle}>
            <code>&lt;Circle /&gt;</code>
          </div>
          <div className={styles.circleBody}>
            <Circle
              color="#000"
              r={r}
              strokeWidth={strokeWidth}
              value={value}
            />
          </div>
        </div>
        <div>
          <div className={styles.circleTitle}>
            <code>&lt;CirrcleDashArray /&gt;</code>
          </div>
          <div className={styles.circleBody}>
            <CirrcleDashArray
              color="#000"
              r={r}
              strokeWidth={strokeWidth}
              value={value}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
